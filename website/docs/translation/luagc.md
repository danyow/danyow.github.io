---
id: luagc
title: Lua的垃圾回收
slug: /translation/luagc
---


# Garbage Collection in Lua - Roberto Ierusalimschy

> [Youtube视频地址](https://www.youtube.com/watch?v=wGizKsOJQuE)

> [Slide幻灯片地址](https://www.lua.org/wshop18/Ierusalimschy.pdf)

## Automatic Memory Management

- Releases memory automatically, when it is not needed anymore.
- Two main approaches:
  - Reference counting
  - Garbage collection
- Lua uses garbage collection.
  - main reason: in dynamically-typed languages, reference count adds overhead
    even if a program never allocates memory.

### 自动内存管理

- 当对象不再需要时, 自动释放掉对象占用的内存.
- 目前市面上有两种主流方法实现用以自动内存管理:
  - 引用计数
  - 垃圾回收
- 其中 `Lua` 使用垃圾回收.
- 主要原因: 在动态类型语言中, 即使程序从不分配内存, 引用计数也会增加开销.

因为在动态类型的语言中你不知道变量的类型, 没有类型引用计数会增加开销, 即使程序从不分配内存.

即使简单的操作数字或仅操作已分配但未创建新分配值的分配值, 您仍会不断更新引用计数, 这是一个很大的开销, 因此 `Lua`不使用引用计数.

---

## The Lua GC

- All objects in Lua are subject to garbage collection.
  - table, functions, "modules", threads(coroutines) etc,
- Only objects accessible from the root set are preserved.
  - root set: the registry and shared metatables.
  - the registry contains the global table (_G), the main thread, and
    package.loaded.
- The collector operates on top of standard allocation functions.
- All objects linked in a long list.

### Lua的垃圾回收

- `Lua` 中的所有对象都需要进行垃圾回收.
  - 表, 函数, "模块", 线程(协程)等,
- 仅保留从`root set`中可访问的对象.
  - `root set`: `registry`和共享元表.
  - `registry`包含全局表 (`_G`), 主线程和`package.loaded`.
- 收集器操作在标准的分配函数之上进行.
- 所有对象都链接到一个`long list`中.

`Lua` 理解为一个大的生态系统, 当出现许多垃圾的时候, 进行自动回收之后确保生态系统能回到最初的状态.

共享元表: 在`Lua`是奇怪的类型, 比如函数编号, 除了表以外的所有东西和userdata都是共享的.
`standard allocation functions`: 例如来自标准C库的`malloc`, `realloc`, `free`, `calloc`
等.

---

## Lua GC until Version 5.0

- Basic mark & sweep collector.
- Mark: traverse the object graph, starting from the root set, marking the live
  objects.
- Sweep: traverse the long list of all objects, deleting those not marked.
- Between mark and sweep, the collector separates and resurrects objects to be
  finalized.

### `Lua` 在 5.0 之前的垃圾回收

- 基础的 `Mark & Sweep` 收集器.
- 标记：遍历对象图, 从`root set`开始, 标记活对象.
- 清除：遍历所有对象的`long list`, 删除那些没有标记的.
- 在标记和清除过程中, 收集器分离并恢复需要执行`finalized`的对象.

以上步骤基本都是原子性的.

---

## The Collector's Pace

- The pace of a collector is a key component in system's performance.
- A collector that never runs has zero CPU cost, but a huge memory cost.
- A collector that runs at all the time has zero memory overhead, but a huge CPU
  cost.
- The sweet spot is somewhere in between.
  - New Collection when memory use is twice the use at the end of last
    collection.

### 收集器的节奏

- 收集器的节奏是系统性能的关键组成部分.
- 如果一个从来都不运行的收集器, 那么其 `CPU` 成本为零, 但对内存则是巨大的成本.
- 而如果一个一直运行的收集器, 那么其内存开销为零, 但 `CPU` 开销巨大.
- 那么平衡点则介于两者之间.
  - 当内存使用达到上次垃圾回收结束时的两倍时进行垃圾回收触发一次新的垃圾回收.

---

## Lua GC until Version 5.0(defect)

- Main drawback of Mark & Sweep: pauses in the program execution during a GC
  cycle can be very long.

### `Lua` 在 5.0 之前的垃圾回收(缺点)

- `Mark & Sweep` 的主要缺点：在 `GC` 周期中程序执行的暂停可能会很长.

也就是人们称之为的`stop the world`.

---

## 5.1

In version 5.1, Lua got an incremental collector. An _incremental_ collector
interleaves the execution of the collector with the main program.

### 5.1

在5.1版中, 采用了增量垃圾回收策略.增量垃圾回收器的垃圾回收可以逐步进行, 不需要一次性完成, 避免了对程序的长时间暂停.

---

## The mutator

- From the garbage collector's point of view, the program is just some nuisance
  changing the data it is trying to collect: the mutator!

### The mutator(不稳定因素)

- 从垃圾回收器的角度来看, 程序自身就是一个噪音源时常改变数据导致垃圾回收操作!

促使垃圾回收进行的元凶, 也就是程序本身

理解为收集器的传入的变量

在垃圾回收的文献当中就有一个比较奇怪的术语, `mutator`, 也称主程序就是这个 `mutator` 的. 起始可以理解为 `mutator`
只是一个噪音而已, 亦可理解为不规范编写代码的程序就是一个不可估计的异端.

---

## Tri-color Collector

- Each object is in one of three states: white, gray, or black.
- Non-visited objects are marked white.
- Visited but not-traversed objects are marked gray.
- Traversed objects are marked black.

![图片](https://pic1.zhimg.com/v2-9a19f9bc005eb4561d827b7b385670e4_b.jpg)

### 三色收集器

- 每个物体都处于三种状态之一：白色、灰色或黑色.
- 未访问的对象被标记为白色.
- 已访问但未经过的对象标记为灰色.
- 被遍历的对象被标记为黑色.

---

## Invariants

- Objects in the root set are gray or black.
- A black object cannot point to a white object.
- Gray objects define the boundary between the black objects and the white
  objects.
- Collection advances by traversing gray objects, turning them black.
  - which may create new gray objects
- Collection ends when there are no more gray objects.

### 定义(不变量)

- `root set`中的对象要么为灰色, 要么为黑色.
- 黑色的对象不会指向白色对象.
- 灰色对象定义黑色对象和白色对象之间的边界.
- 收集过程通过不断地遍历灰色对象, 将其变为黑色.
  - 这可能会产生新的灰色物体
- 当不再有灰色对象时, 收集步骤结束.

同时灰色存在的那一圈被理解为一个边界.

最终将会没有灰色, 黑色将会被保留, 白色被当作垃圾作为清除.

---

## Barriers

- The mutator can break the invariant of black objects not pointing to white
  ones.
  `t.x = {}`
- A _write barrier_ tests this case and restores the invariant if necessary.
  - slows down all assignments.
- It can either move forward the white object to gray or move backward the black
  object to gray.

### 屏障

- `The mutator(不稳定因素)`可以打破黑色物体不指向白色物体的`invariant(定义)`.
  - 例如这么编写的代码: `t.x = {}`
- 写屏障检测到这种情况时, 并在必要时确保`invariant(定义)`不会被推翻(恢复不变量).
  - 但这样做使得所有赋值操作变慢.
- 屏障将白色对象推进到灰色, 也可以将黑色对象回退到灰色.

上面的 `t` 理解为黑色对象, `{}` 理解为一个新的白色对象, 理论上是不存在, 黑色直接指向白色的. 所以这里就打破了屏障.


---

## Some Heuristics

- Objects moved back to gray are kept in a separate list to be traversed only in
  the atomic phase.
  - avoids a ping-pong
- Stacks are kept gray.
  - avoids barriers when writing to the stack!
- Assignment to tables moves a black table back to gray.
  `for i = 1, N do a[i] = <exp> end`
- Assignment of a metatable moves a white metatable forward to gray.
  `setmetatable(obj, mt)`

### 启发式处理

- 移回的灰色对象被保存在一个单独列表中, 并在之后的原子阶段才能遍历.
  - 避免对象状态的反复变更
- 让栈中的对象保持灰色.
  - 避免写入栈时屏障生效.
- 对表进行赋值时将状态为黑色的表变为状态为灰色.
  `for i = 1, N do a[i] = <exp> end`
- 对元表进行赋值时将状态为白色的元表变为状态为灰色.
  `setmetatable(obj, mt)`

这里的写入栈通常是写入局部变量参数, 代价就是在原子阶段也需要遍历栈.

---

## The Atomic Step

- The mark phase is ended by an atomic step.
- This step traverses all "gray again" objects.
  - including stacks
- It clears weak tables.
- It separates objects to be finalized, resurrecting them and their graphs.
- It clears weak tables (again?).

### 原子阶段

- 增量标记操作结束后进入一个原子阶段.
- 原子阶段遍历我们之前维护在一个独立的表中的所有"再次变为灰色"的对象.
  - 包括栈上的对象.
- 清除弱引用的表.
- 分离, 并恢复需要执行`finalize`操作的对象.
- 再次清除弱引用的表.

---

## The Incremental Collector's Pace

- An incremental collector runs alternated with the mutator.
- At what pace?
- Most collectors measure "time" by memory allocation.
- How to translate bytes to GC activity?
  - the fallacy of "big userdata"
- Two variables control the pace of the incremental collector.
- The pause controls by how much memory has to grow before starting a new cycle.
  - the fixed "2" in the old scheme.
- The multiplier controls the translation of bytes to GC work.
  - still somewhat mystifying

### 增量收集器的节奏

- 增量收集器与`mutator(不稳定因素)`交替运行.
- 以怎样的节奏进行呢?
- 大多数收集器通过内存分配来把握"时间".
- 所以我们是以哪种方式来告诉收集器需要开始运行的呢?
  - 通常大多数人理解的*大的用户数据*, 这其实是谬论.
- 两个变量控制增量收集器的速度.
- `pause(暂停)`控制着在开始一个新的循环之前必须增加多少内存.
  - 旧方案中的固定"2".
- `multiplier(乘数)`控制垃圾回收的工作频率.
  - 还是有点神秘

有一个称为`multiplier(乘数)`的模型, 用以调整其频率. 另一个是`pause(暂停)`的模型, 可以获取更大的暂停.

---

## Summary

An incremental collector reduces the length of pauses, but it does not reduce
the overall overhead of the collector; quite the opposite.


### 小结

增量垃圾回收虽然减少了程序每次暂停的时间, 但垃圾回收操作的总时间代价和之前相比并没有减少.

---

## The Generational Collector

- The generational hypothesis: most objects die young.
- So, the collector could concentrate its efforts in young objects.
- All objects are classified as young or old. They are young when created; after
  surviving two collections, they become old.
- In a minor collection, the collector traverses and sweeps only young objects.

### 分代垃圾回收器

- 分代假设: 大多数对象很快失活.
- 因此, 收集器可以把精力集中在新对象上.
- 所有对象都分为新旧分类. 他们被创造出来时被认为是新的；在保存了两代后, 对象变旧.
- 在`minor(小)`集合中, 收集器只遍历和清除新对象.

---

## The Generational Invariant

- An old object should not point to a new one.
- Not so easy to keep as the incremental invariant.
- Both moving "forward" or "backward" have their problems.
  - forward: creates too many old objects (and breaks invariant)
  - backward: breaks invariant somewhere else

### 分代的定义

- 旧对象不应指向新对象.
- 不像增量`invriant(定义)`那么容易保持.
- "推进"或"回退"都有问题.
  - 推进: 创建太多的旧对象（并破坏`invriant(定义)`）
  - 回退: 同样会修改其`invriant(定义)`

---

## The Touched Objects

- If a back barrier detects an old object pointing to a new one, the old object
  is marked as touched and put in a special list.
  - not totally unlike the gray-again list
- Touched objects are also traversed (but not collected) in minor collections.
- After two cycles, a touched object goes back to regular old, unless it is
  touched again.

### 被触摸的对象

- 如果回退屏障检测到旧对象指向了新对象, 旧物体将被标记为已触摸, 并放入特殊列表中.
  - 和`(gray again)再次灰色列表`没什么两样
- 触摸的对象也会在`minor(小)`集合中遍历（但不会被收集）.
- 经过两次循环后, 一个触摸的物体会回到原来的状态, 除非它再次被触摸.

![](https://pic1.zhimg.com/v2-535211242d20aec0b7a3bbbbbc33e220_b.jpg)

---

## Questions

What was wrong with the generational collector in Lua 5.2?

Objects had to survive one GC cycle before becoming old.

### 提问

- Lua 5.2的分代垃圾回收器的错误之处是？

- 新对象只经历一次垃圾回收就变旧.

---

## Surviving One Cycle

- Much simpler implementation.
- After a collection, all surviving objects become old, so the changes cannot
  break the invariant.
- List of touched objects can be erased.

![](https://pic2.zhimg.com/v2-aac53cec9f897e7cd48d8cda0b2a56e5_b.jpg)

### 存活一个周期

- 实现起来比较简单.
- 收集之后, 所有幸存的对象都会变老, 因此更改不会破坏`invriant(定义)`.
- 触摸对象的列表可以删除.

---

## Surviving Two Cycles

- At the end of a collection, some new objects become old, some do not.
  - breaks the invariant!
- List of touched objects must be corrected to next cycle.

![](https://pic2.zhimg.com/v2-0eeb588f9817a55345e81beebdb1d5a9_b.jpg)

### 存活两个周期

- 在一个收集之后, 一些新对象变为旧对象, 一些则不变.
  - 打破了`invriant(定义)`
- 触摸对象的列表必须更正到下一个周期.

---

## Final Remarks

- When the generational hypothesis holds, a generational collector can reduce
  the overhead of the GC.
- Not always the hypothesis holds.
  - batch programs
- Testing a collector is hard.

### 总结

- 如果分代的假设成立, 分代垃圾回收器可以减少垃圾回收的代价.
- 这个假设并不总是成立的.
  - 仅仅是对于批处理脚本来说很多时候这个假设就不成立
- 对于垃圾回收器的好坏评估较为困难.

