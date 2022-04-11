---
id: lua-try-catch
title: 浅析lua异常捕获处理机制
slug: /reprint/lua-try-catch
---

异常捕获是高级语言的一大特性，通过对异常地捕获和处理，可以有效提高系统的稳定性和健壮性。因为无论再怎样改进代码，都不可避免出现一些异常，例如文件io错误、网络错误、内存错误等等，就要求编码对错误进行捕获，同时打印日志以便开发人员跟进问题的处理。当然，lua也提供了接口用于捕获运行时异常。

lua异常捕获函数
---------

lua有两个函数可用于捕获异常：pcall 和 xpcall，这两个函数很类似，都会在保护模式下执行函数，效果类似try-catch，可捕获并处理异常。

**两个函数的原型如下：**

```lua
pcall (func [, arg1, ···])
xpcall (func, errfunc [, arg1, ···])
```

对比两个函数，xpcall多了一个异常处理函数参数
errfunc。对于pcall，异常处理完时只简单记录错误信息，然后释放调用栈空间，而对于xpcall，这个参数可用于在调用栈释放前跟踪到这些数据。效果如下：

```shell
> f=function(...) error(...) end
> pcall(f, 123)
false   stdin:1: 123
> xpcall(f, function(e) print(debug.traceback()) return e end, 123)
stack traceback:
        stdin:1: in function <stdin:1>
        [C]: in function 'error'
        stdin:1: in function 'f'
        [C]: in function 'xpcall'
        stdin:1: in main chunk
        [C]: in ?
false   stdin:1: 123
```

值得注意的是， errfunc的传入参数是异常数据，函数结束时必须将这个数据返回，才能实现和 pcall 一样的返回值



lua异常捕获处理机制
-----------

下面，以 pcall 来说明 lua异常捕获是怎么实现的。这里，lua代码版本取5.3.1

### pcall的实现

pcall的c实现函数为luaB_pcall，如下：

```c
// lbaselib.c
static int luaB_pcall (lua_State *L) {
  int status;
  luaL_checkany(L, 1);
  lua_pushboolean(L, 1);  // 如果没错误发生，返回true
  lua_insert(L, 1);  /* put it in place */
  status = lua_pcallk(L, lua_gettop(L) - 2, LUA_MULTRET, 0, 0, finishpcall);
  return finishpcall(L, status, 0);
}
```

看下lua_pcallk，这是pcall的预处理函数：

```c
// lapi.c
LUA_API int lua_pcallk (lua_State *L, int nargs, int nresults, int errfunc,
                        lua_KContext ctx, lua_KFunction k) {
  struct CallS c;
  int status;
  ptrdiff_t func;
  lua_lock(L);
  api_check(L, k == NULL || !isLua(L->ci),
    "cannot use continuations inside hooks");
  api_checknelems(L, nargs+1);
  api_check(L, L->status == LUA_OK, "cannot do calls on non-normal thread");
  checkresults(L, nargs, nresults);
  if (errfunc == 0)
    func = 0;
  else {
    StkId o = index2addr(L, errfunc);
    api_checkstackindex(L, errfunc, o);
    func = savestack(L, o); 
  }
  c.func = L->top - (nargs+1);  // 取到pcall要执行的函数
  if (k == NULL || L->nny > 0) {  /* no continuation or no yieldable? */
    c.nresults = nresults;  /* do a 'conventional' protected call */
    /* 处理pcall（非协程走这里，详见拓展阅读）*/
    status = luaD_pcall(L, f_call, &c, savestack(L, c.func), func); 
  }
  else {  //当resume协程时执行，已在保护模式下
    CallInfo *ci = L->ci;
    ci->u.c.k = k;  /* save continuation */
    ci->u.c.ctx = ctx;  /* save context */
    /* save information for error recovery */
    ci->extra = savestack(L, c.func);
    ci->u.c.old_errfunc = L->errfunc;
    L->errfunc = func; // 记录异常处理函数
    setoah(ci->callstatus, L->allowhook);  /* save value of 'allowhook' */
    ci->callstatus |= CIST_YPCALL;  // 打标记设置协程恢复点
    luaD_call(L, c.func, nresults, 1);  /* do the call */
    ci->callstatus &= ~CIST_YPCALL; // 执行结束去掉标记
    L->errfunc = ci->u.c.old_errfunc;
    status = LUA_OK;  /* if it is here, there were no errors */
  }
  adjustresults(L, nresults);
  lua_unlock(L);
  return status;
}
```

这里重点看下 luaD_pcall 的实现，这是pcall的核心处理函数：

```c
// ldo.c 
int luaD_pcall (lua_State *L, Pfunc func, void *u,
                ptrdiff_t old_top, ptrdiff_t ef) {
  int status;
  CallInfo *old_ci = L->ci;
  lu_byte old_allowhooks = L->allowhook;
  unsigned short old_nny = L->nny;
  ptrdiff_t old_errfunc = L->errfunc;
  L->errfunc = ef; // 记录异常处理函数
  status = luaD_rawrunprotected(L, func, u); // 以保护模式运行
  if (status != LUA_OK) {  // 当异常发生时
    StkId oldtop = restorestack(L, old_top); // ‘释放’调用栈
    luaF_close(L, oldtop);  /* close possible pending closures */
    seterrorobj(L, status, oldtop);
    L->ci = old_ci;
    L->allowhook = old_allowhooks;
    L->nny = old_nny;
    luaD_shrinkstack(L);
  }
  L->errfunc = old_errfunc;
  return status;
}
```

看下 luaD_rawrunprotected 函数的实现：

```c
// ldo.c 
int luaD_rawrunprotected (lua_State *L, Pfunc f, void *ud) {
  unsigned short oldnCcalls = L->nCcalls;
  struct lua_longjmp lj;
  lj.status = LUA_OK;
  lj.previous = L->errorJmp;  /* chain new error handler */
  L->errorJmp = &lj;
  LUAI_TRY(L, &lj,    (*f)(L, ud);  ); // 异常宏处理
  L->errorJmp = lj.previous;  // 设置错误跳转点
  L->nCcalls = oldnCcalls;
  return lj.status;
}
```

LUAI_TRY 以及文章后面出现的LUAI_THROW
都是宏实现的，目的是兼容主流c或c++版本的异常处理语法，表现为try-catch的语法结构。简单说就是，执行代码前先try，执行过程出错就throw，然后在catch的地方处理异常。

```c
/*
** LUAI_THROW/LUAI_TRY define how Lua does exception handling. By
** default, Lua handles errors with exceptions when compiling as
** C++ code, with _longjmp/_setjmp when asked to use them, and with
** longjmp/setjmp otherwise.
*/
#if !defined(LUAI_THROW)	 /* { */

#if defined(__cplusplus) && !defined(LUA_USE_LONGJMP)	/* { */

/* C++ exceptions */
#define LUAI_THROW(L,c)	 throw(c)
#define LUAI_TRY(L,c,a) \
 try { a } catch(...) { if ((c)->status == 0) (c)->status = -1; }
#define luai_jmpbuf	 int  /* dummy variable */

#elif defined(LUA_USE_POSIX)	 /* }{ */

/* in POSIX, try _longjmp/_setjmp (more efficient) */
#define LUAI_THROW(L,c)	 _longjmp((c)->b, 1)
#define LUAI_TRY(L,c,a)	 if (_setjmp((c)->b) == 0) { a }
#define luai_jmpbuf	 jmp_buf

#else	 /* }{ */

/* ISO C handling with long jumps */
#define LUAI_THROW(L,c)	 longjmp((c)->b, 1)
#define LUAI_TRY(L,c,a)	 if (setjmp((c)->b) == 0) { a }
#define luai_jmpbuf	 jmp_buf

#endif	 /* } */

#endif	 /* } */
```

当异常出现时，status 就会赋值为-1，即不等于 LUA_OK

### xpcall和pcall的区别

对比下xpcall对比pcall，有什么区别？

```c
// lbaselib.c
static int luaB_pcall (lua_State *L) {
  int status;
  luaL_checkany(L, 1);
  lua_pushboolean(L, 1);  /* first result if no errors */
  lua_insert(L, 1);  /* put it in place */
  status = lua_pcallk(L, lua_gettop(L) - 2, LUA_MULTRET, 0, 0, finishpcall);
  return finishpcall(L, status, 0);
}


static int luaB_xpcall (lua_State *L) {
  int status;
  int n = lua_gettop(L);
  luaL_checktype(L, 2, LUA_TFUNCTION);  /* check error function */
  lua_pushboolean(L, 1);  /* first result */
  lua_pushvalue(L, 1);  // 将异常处理函数 errfunc 写入调用栈
  lua_rotate(L, 3, 2);  /* move them below function's arguments */
  status = lua_pcallk(L, n - 2, LUA_MULTRET, 2, 2, finishpcall);
  return finishpcall(L, status, 2);
}
```

再回头看下lua_pcallk

```c
// lapi.c
LUA_API int lua_pcallk (lua_State *L, int nargs, int nresults, int errfunc,
                        lua_KContext ctx, lua_KFunction k) {
  struct CallS c;
  int status;
  ptrdiff_t func;
  lua_lock(L);
  api_check(L, k == NULL || !isLua(L->ci),
    "cannot use continuations inside hooks");
  api_checknelems(L, nargs+1);
  api_check(L, L->status == LUA_OK, "cannot do calls on non-normal thread");
  checkresults(L, nargs, nresults);
  if (errfunc == 0)
    func = 0; // pcall时 func为0
  else {
    StkId o = index2addr(L, errfunc);
    api_checkstackindex(L, errfunc, o);
    func = savestack(L, o); // xpcall取到异常处理函数 errfunc
  }
```

然后， func 赋值给 L->errfunc，在异常发生时，就检查一下这个函数。

什么地方执行这个错误处理函数？

```c
// ldebug.c
l_noret luaG_errormsg (lua_State *L) {
  if (L->errfunc != 0) {  // 如果有异常处理函数 errfunc 
    StkId errfunc = restorestack(L, L->errfunc); 
    setobjs2s(L, L->top, L->top - 1);  /* move argument */
    setobjs2s(L, L->top - 1, errfunc);  /* push function */
    L->top++;  /* assume EXTRA_STACK */
    luaD_call(L, L->top - 2, 1, 0);  /* call it */
  }
  luaD_throw(L, LUA_ERRRUN);
}
```

luaD_throw则是调用 LUAI_THROW，跳到前面catch的位置

```c
// ldo.c
l_noret luaD_throw (lua_State *L, int errcode) {
  if (L->errorJmp) {  /* thread has an error handler? */
    L->errorJmp->status = errcode;  /* set status */
    LUAI_THROW(L, L->errorJmp);  /* jump to it */
  }
  else {  /* thread has no error handler */
    global_State *g = G(L);
    L->status = cast_byte(errcode);  /* mark it as dead */
    if (g->mainthread->errorJmp) {  /* main thread has a handler? */
      setobjs2s(L, g->mainthread->top++, L->top - 1);  /* copy error obj. */
      luaD_throw(g->mainthread, errcode);  /* re-throw in main thread */
    }
    else {  /* no handler at all; abort */
      if (g->panic) {  /* panic function? */
        seterrorobj(L, errcode, L->top);  /* assume EXTRA_STACK */
        if (L->ci->top < L->top)
          L->ci->top = L->top;  /* pushing msg. can break this invariant */
        lua_unlock(L);
        g->panic(L);  /* call panic function (last chance to jump out) */
      }
      abort();
    }
  }
}
```

**两种情况会触发这个函数**

1、主动调用error时：

```c
// lapi.c
LUA_API int lua_error (lua_State *L) {
  lua_lock(L);
  api_checknelems(L, 1);
  luaG_errormsg(L);
  /* code unreachable; will unlock when control actually leaves the kernel */
  return 0;  /* to avoid warnings */
}
```

2、出现运行时错误时：

```c
// ldebug.c
l_noret luaG_runerror (lua_State *L, const char *fmt, ...) {
  CallInfo *ci = L->ci;
  const char *msg;
  va_list argp;
  va_start(argp, fmt);
  msg = luaO_pushvfstring(L, fmt, argp);  /* format message */
  va_end(argp);
  if (isLua(ci))  /* if Lua function, add source:line information */
    luaG_addinfo(L, msg, ci_func(ci)->p->source, currentline(ci));
  luaG_errormsg(L);
}
```

拓展阅读
----

### lua state之nny

在lua state中，nny记录了调用栈上不能被挂起的次数，定义在 lua_State结构：

```c
struct lua_State {
  CommonHeader;
  lu_byte status;
  StkId top;  /* first free slot in the stack */
  global_State *l_G;
  CallInfo *ci;  /* call info for current function */
  const Instruction *oldpc;  /* last pc traced */
  StkId stack_last;  /* last free slot in the stack */
  StkId stack;  /* stack base */
  UpVal *openupval;  /* list of open upvalues in this stack */
  GCObject *gclist;
  struct lua_State *twups;  /* list of threads with open upvalues */
  struct lua_longjmp *errorJmp;  /* current error recover point */
  CallInfo base_ci;  /* CallInfo for first level (C calling Lua) */
  lua_Hook hook;
  ptrdiff_t errfunc;  /* current error handling function (stack index) */
  int stacksize;
  int basehookcount;
  int hookcount;
  unsigned short nny;  /* number of non-yieldable calls in stack */
  unsigned short nCcalls;  /* number of nested C calls */
  lu_byte hookmask;
  lu_byte allowhook;
};
```

为什么lua state需要这个字段？

这是因为pcall调用函数中还可以有pcall，支持多层嵌套，所以需要记录一个次数值，在pcall执行前+1，结束后-1

```c
/*
** Call a function (C or Lua). The function to be called is at *func.
** The arguments are on the stack, right after the function.
** When returns, all the results are on the stack, starting at the original
** function position.
*/
void luaD_call (lua_State *L, StkId func, int nResults, int allowyield) {
  fprintf(stderr, "luaD_call %d\n", allowyield);
  if (++L->nCcalls >= LUAI_MAXCCALLS) {
    if (L->nCcalls == LUAI_MAXCCALLS)
      luaG_runerror(L, "C stack overflow");
    else if (L->nCcalls >= (LUAI_MAXCCALLS + (LUAI_MAXCCALLS>>3)))
      luaD_throw(L, LUA_ERRERR);  /* error while handing stack error */
  }
  if (!allowyield) L->nny++;
  if (!luaD_precall(L, func, nResults))  /* is a Lua function? */
    luaV_execute(L);  /* call it */
  if (!allowyield) L->nny--;
  L->nCcalls--;
}
```

这样，通过判断 nny的值，就可以知道当前过程能否挂起。

细心的同学会发现， luaD_call是在pcall的执行过程调用到的， 为什么 L->nny会大于0？

这是因为lua 虚拟机（lua state）启动时 L->nny 就赋值1了

```c
// lstate.c
LUA_API lua_State *lua_newstate (lua_Alloc f, void *ud) {
  int i;
  lua_State *L;
  global_State *g;
  LG *l = cast(LG *, (*f)(ud, NULL, LUA_TTHREAD, sizeof(LG)));
  if (l == NULL) return NULL;
  L = &l->l.l;
  g = &l->g;
  L->next = NULL;
  L->tt = LUA_TTHREAD;
  g->currentwhite = bitmask(WHITE0BIT);
  L->marked = luaC_white(g);
  preinit_thread(L, g);  // 预处理协程时将 L->nny 赋值1
  g->frealloc = f;
  g->ud = ud;
  g->mainthread = L;
  g->seed = makeseed(L);
  g->gcrunning = 0;  /* no GC while building state */
  g->GCestimate = 0;
  g->strt.size = g->strt.nuse = 0;
  g->strt.hash = NULL;
  setnilvalue(&g->l_registry);
  luaZ_initbuffer(L, &g->buff);
  g->panic = NULL;
  g->version = NULL;
  g->gcstate = GCSpause;
  g->gckind = KGC_NORMAL;
  g->allgc = g->finobj = g->tobefnz = g->fixedgc = NULL;
  g->sweepgc = NULL;
  g->gray = g->grayagain = NULL;
  g->weak = g->ephemeron = g->allweak = NULL;
  g->twups = NULL;
  g->totalbytes = sizeof(LG);
  g->GCdebt = 0;
  g->gcfinnum = 0;
  g->gcpause = LUAI_GCPAUSE;
  g->gcstepmul = LUAI_GCMUL;
  for (i=0; i < LUA_NUMTAGS; i++) g->mt[i] = NULL;
  if (luaD_rawrunprotected(L, f_luaopen, NULL) != LUA_OK) {
    /* memory allocation error: free partial state */
    close_state(L);
    L = NULL;
  }
  return L;
}
```

看下 preinit_thread 函数：

```c
// lstate.c
/*
** preinitialize a thread with consistent values without allocating
** any memory (to avoid errors)
*/
static void preinit_thread (lua_State *L, global_State *g) {
  G(L) = g;
  L->stack = NULL;
  L->ci = NULL;
  L->stacksize = 0;
  L->twups = L;  /* thread has no upvalues */
  L->errorJmp = NULL;
  L->nCcalls = 0;
  L->hook = NULL;
  L->hookmask = 0;
  L->basehookcount = 0;
  L->allowhook = 1;
  resethookcount(L);
  L->openupval = NULL;
  L->nny = 1; //将 L->nny 赋值1
  L->status = LUA_OK;
  L->errfunc = 0;
}
```

那协程 lua_newthread时也会调用 preinit_thread ，但是两者对于pcall的实现却有不少的差异。

如下，协程创建时调用 preinit_thread 预处理 协程：

```c
// lstate.c
LUA_API lua_State *lua_newthread (lua_State *L) {
  global_State *g = G(L);
  lua_State *L1;
  lua_lock(L);
  luaC_checkGC(L);
  /* create new thread */
  L1 = &cast(LX *, luaM_newobject(L, LUA_TTHREAD, sizeof(LX)))->l;
  L1->marked = luaC_white(g);
  L1->tt = LUA_TTHREAD;
  /* link it on list 'allgc' */
  L1->next = g->allgc;
  g->allgc = obj2gco(L1);
  /* anchor it on L stack */
  setthvalue(L, L->top, L1);
  api_incr_top(L);
  preinit_thread(L1, g);  // 预处理协程时将 L->nny 赋值1
  L1->hookmask = L->hookmask;
  L1->basehookcount = L->basehookcount;
  L1->hook = L->hook;
  resethookcount(L1);
  /* initialize L1 extra space */
  memcpy(lua_getextraspace(L1), lua_getextraspace(g->mainthread),
         LUA_EXTRASPACE);
  luai_userstatethread(L, L1);
  stack_init(L1, L);  /* init stack */
  lua_unlock(L);
  return L1;
}
```

但是，协程在lua中是这样调用的：

```lua
local co = coroutine.create(func)
coroutine.resume(co)
```

再看下 resume的实现：

```c
LUA_API int lua_resume (lua_State *L, lua_State *from, int nargs) {
  int status;
  int oldnny = L->nny;  /* save "number of non-yieldable" calls */
  lua_lock(L);
  luai_userstateresume(L, nargs);
  L->nCcalls = (from) ? from->nCcalls + 1 : 1;
  L->nny = 0;  // 将 nny赋值 0，允许挂起
  api_checknelems(L, (L->status == LUA_OK) ? nargs + 1 : nargs);
  status = luaD_rawrunprotected(L, resume, &nargs); // 在保护模式启动协程
  if (status == -1)  /* error calling 'lua_resume'? */
    status = LUA_ERRRUN;
  else {  /* continue running after recoverable errors */
    while (errorstatus(status) && recover(L, status)) { // 检查是否有可恢复点
      /* unroll continuation */
      status = luaD_rawrunprotected(L, unroll, &status);
    }
    if (errorstatus(status)) {  /* unrecoverable error? */
      L->status = cast_byte(status);  /* mark thread as 'dead' */
      seterrorobj(L, status, L->top);  /* push error message */
      L->ci->top = L->top;
    }
    else lua_assert(status == L->status);  /* normal end or yield */
  }
  L->nny = oldnny;  // 恢复协程的nny值
  L->nCcalls--;
  lua_assert(L->nCcalls == ((from) ? from->nCcalls : 0));
  lua_unlock(L);
  return status;
}
```

可以看出协程的pcall处理有些不同，为什么会这样？

这是因为协程可挂起（yield），可恢复上下文（resume），就会有pcall执行过程有协程挂起的情况，所以需要记录还原点，然后从上下文恢复。  
所以到这里也可以发现，除了创建的协程，lua state原生的协程是无法被挂起，通常只有在lua代码执行完时才会退出。

本文转自 [https://blog.csdn.net/mycwq/article/details/49256003](https://blog.csdn.net/mycwq/article/details/49256003)，如有侵权，请联系删除。
