---
id: boehm
title: Boehm垃圾回收
slug: /translation/boehm
---

# The "Boehm-Demers-Weiser" Conservative Garbage Collector

> [Slide幻灯片地址](https://www.hboehm.info/gc/04tutorial.pdf)

> [论文地址](https://dl.acm.org/doi/pdf/10.1145/96709.96735)

> [大佬主页](https://www.hboehm.info/)

## Outline

- Introduction
  - Interface
  - Implementation basics & goals
- Implementation details and issues
  - Core collector
  - Enhancements
- Experiences and a few measurements

### 概述

- 导言
  - 接口
  - 实现基础与目标
- 实现细节和问题
  - 核心回收器
  - 增强功能
- 经验和一些测量

---

## What is it?

- A garbage collecting replacement for C's malloc().
  - Calls to free() are optional.
  - Unreachable memory is automatically reclaimed, and made available to future
    malloc() calls.
- A tracing (mark/sweep) garbage collector.
  - It periodically determines which objects can be reached by following pointers.
  - The rest can be reused for other purposes.
- An easy way to add garbage collection to a runtime system.
  - Easy to interface to.
  - Interacts well with C/C++ code.
  - Gcj (Java), Mono (C#, .NET), Bigloo (Scheme), MzScheme.
- A leak detector for programs that call free().
  - Unreachable unfreed memory is a memory leak.

### 这是怎么一回事？

- 一个用以取代`malloc()`的垃圾回收器。
    - 对`free()`的调用是可选的。
    - "不可达"内存会自动回收，并提供特性 `malloc()`用以调用。
- 一个跟踪（`Marks&Weep`）垃圾回收器。
    - 周期性地通过`following pointers`来确定哪些对象指针是可达的。
    - 也可以用于其他目的。
- 一个简单的方法将该垃圾回收加入到运行时系统.
    - 易于接口。
    - 与`C/C++`代码交互良好。
    - `GCJ（Java）`、`Mono（C#, .NET）`、`Bigloo（Scheme）`、`MzScheme`。
- 当作为内存泄漏检测器时可用于调用`free()`接口
    - 不可达的未释放内存是一种内存泄漏。

`GCJ` = `GNU Compiler for the Java Programing Language`(GNU Java语言编译器)

能将`Java`源文件编译成`Java`字节码文件或者直接将`Java`源文件编译为本地机器码, 它也能够将`Java`字节码文件编译为本地机器码

`Bigloo`: `Bigloo是一个高效的Scheme语言编程环境`

通过将 `Scheme` 转成 `C` 语言来优化编译，`Bigloo` 允许在 `Scheme` 和 `C` 语言间进行连接。

`MzScheme`: `MzScheme是一个高效的Scheme语言编程环境`  

---

## Example: Lisp S-expressions

```c
#include "gc.h"

typedef union se 
{
  struct cons * cp; 
  int i;
} sexpr;

struct cons 
{
  union se head;
  union se tail; 
};

#define car(s) (s).cp->head
#define cdr(s) (s).cp->tail
#define from_i(z) ({sexpr tmp; tmp.i=z; tmp;})
#define to_i(s) (s).i

sexpr cons(sexpr a, sexpr b) 
{
  sexpr tmp = {GC_MALLOC(sizeof(struct cons))};
  car(tmp) = a; 
  cdr(tmp) = b;
  return (tmp);
};

int main() 
{
  return to_i(car(cons(from_i(0), from_i(1))));
}
```

### 示例：`Lisp S-expressions`

... 看不懂

---

## Where did it come from?

- Began life (ca. 1980) as a simple GC for the Russell programming language. (
  Demers was original author.)
- Later (ca. 1985?) changed to remove restrictions on generated code, and allow
  use in the compiler itself.
  - Eliminate endless debugging of manual reference counting.
- Used for student compilers for a language with higher-order functions.
- Mark Weiser explored use as leak detector (ca. 1986).
- A variant served as the Xerox Cedar GC from the late 80s, replacing
  reference-count collector.
- Unrelated to an earlier garbage collector for C written by Doug McIlroy and
  apparently layered on top of malloc.

### 它是从哪里来的？

- 用于具有高阶函数的语言的学生编译器。
- 马克·韦瑟（Mark Weiser）探索了用作泄漏检测器的方法
- 

---

## What else can it do?

- 20 years of creeping features, including:
  - Invoking finalizers after an object becomes unreachable.
  - Support for use in runtime systems.
    - If the compiler wants to help, it can.
  - Support for heap debugging.
    - What's in the heap?
    - Why is it still there? How can it still be referenced?
  - Support for threads and multiprocessor GC.
    - Maybe a way to speed up standard C applications on multiprocessors?
  - Various mechanisms for reducing GC pauses:
    - Incremental (but not hard real-time) GC.
    - Generational GC which concentrates effort on young objects.
      (But objects are not moved.)
    - Abortable collections.

### 它还能做什么？

- 20年的爬行特征，包括：
  - 在对象变得不可达后调用`finalizer`。
  - 支持在运行时系统中使用。
    - 如果编译器想要帮助，它可以。
  - 支持 `heap` 调试。
    - `heap`里有什么？
    - 为什么它还在那里？它怎么还能被引用？
  - 支持线程和多处理器`GC`。
    - 也许是一种能在多处理器上加速标准`C`应用程序的新方式？
  - 减少`GC`暂停的各种机制：
    - 增量（但不是硬实时）`GC`。
    - 分代`GC`将精力集中在年轻物体上。
    - 可中止回收过程。
---

## What can't it do?

- Reclaim memory or invoke finalizers/destructors immediately.
  - Like all tracing garbage collectors, it only checks for unreachable memory occasionally. 
  - And synchronous heap finalizers are broken anyway...
- Reclaim all unreachable objects.
  - Generally a few will still have pointers to them stored somewhere.
  - The GC doesn't know which registers will be referenced. 
  - And there are other issues ...
  - And unreachable isn't well-defined anyway ...
  - But we generally avoid growing leaks.

### 它不能做什么?

- 立即回收内存或调用`finalizers/destructors`函数。
  - 与所有跟踪垃圾收集器一样，它只是偶尔检查不可达内存.
  - 同步`heap finalizers`也坏了...
- 回收所有所有不可达对象。
  - 一般来说，有些人仍会将指向它们的指针存储在某个地方。
  - `GC`不知道将引用哪些寄存器。
  - 还有其他问题...
  - 不可达起始也是不很明确的定义...
  - 但我们通常避免不断增加的泄漏。

---

## Dealing with C: Conservative Garbage Collection

- For C/C++ programs, we may not know where the pointer variables (roots) are.
  - We may want to use a standard compiler. (Slightly risky with optimization, but popular.)
  - Program may use C unions.
- Even layout of heap objects may be unknown.
- It's easier to build a Java/Scheme/ML/... compiler if pointer location information is optional.
- **Conservative collectors handle pointer location uncertainty:**
  - **_If it might be a pointer it's treated as a pointer._**
  - **Objects with ambiguous references are not moved.**
    - **And we never move any objects.**
  - **May lead to accidental retention of garbage objects.**

## 与`C`打交道：保守的垃圾收集

- 对于`C/C++`程序，我们可能不知道指针变量（根）在哪里。
  - 我们可能需要使用标准编译器。（优化有点风险，但是很受欢迎。）
  - 程序可以使用`C`的联合。
- 甚至堆对象的布局也可能是未知的。
- 如果指针位置信息是可选的。那么构建`Java/Scheme/ML...`编译器就容易多了.
> 注意: 不确定性
- **保守收集器处理指针位置不确定性：**
  - **_如果它可能是一个指针，它将被视为一个指针。_**
  - **不移动引用不明确的对象。**
    - **我们从不移动任何物体。**
  - **可能会导致垃圾物体意外滞留。**


---

## C Interface overview

Debugging support: GC_xyz() vs. GC_XYZ() functions:

- GC_xyz() is the real function.
- GC_XYZ(x) expands to either `GC_xyx(x)` or `GC_debug_xyz(x, <source position, etc>)`.
- Clients should:
  - Use the all-caps version.
  - Always include gc.h.
  - Define GC_DEBUG before including gc.h for debugging.
- This is becoming obsolete technology.
  - Requires too much recompilation.
  - Libunwind, addr2line allow better alternatives.

### `C`接口概述

调试支持：`GC_xyz()` vs. `GC_XYZ()`:

- `GC_xyz()` 是一个实实在在的方法.
- `GC_XYZ(x)` 扩展到任何一个 `GC_xyx(x)` or `GC_debug_xyz(x, <source position, etc>)`
- 客户应该:
  - 使用全大写版本。
  - 始终包括 `gc.h`
  - 在包含`gc.h`之前定义`GC_DEBUG`用于调试。
- 这正在成为过时的技术。
  - 需要太多的重新编译。
  - `Libunwind`、`addr2line` 允许更好的选择。
  
---

## C interface, main functions

- GC_MALLOC(bytes)
  - In simple cases, this is enough.
- GC_MALLOC_ATOMIC(bytes)
  - Allocate pointer-free or untraced (but collected) memory.
- GC_MALLOC_UNCOLLECTABLE(bytes)
  - Allocate uncollectable (but traced) memory.
- GC_REALLOC(p, bytes)
- GC_REGISTER_FINALIZER(...)
  - Register (or unregister or retrieve) "finalizer" code to be called when an
    object is otherwise "unreachable". 
  - Unlike Java, by default, an object is reachable if it can be referenced from other finalizers. (Also Java variant.)
- GC_INIT()  Optional on most platforms. (Must be called from main program on a
  few.)
- GC_FREE()  If you insist. (Usually helps performance for large objects, hurts
  for small ones.)
- GC_MALLOC_IGNORE_OFF_PAGE()  Like GC_MALLOC(), but for large arrays with
  pointers to (near) the beginning.
- Plus statistics, control of incremental GC, more allocator variants, heap
  limits, GC frequency controls, fast inline allocators, etc.



### `C` 接口, 主要的一些方法:

- `GC_MALLOC(bytes)`
  - 在简单的情况下，这就足够了。
- `GC_MALLOC_ATOMIC(bytes)`
  - 分配无指针或未跟踪（但已回收过）内存。
- `GC_MALLOC_UNCOLLECTABLE(bytes)`
  - 分配无法回收的（但跟踪过）的内存。
- `GC_REALLOC(p, bytes)`
- `GC_REGISTER_FINALIZER(...)`
  - 当对象处于"不可达"状态时调用以添加到 (或 注销 或 检索) `finalizer` 
  - 不像 `Java`, 默认情况下, 如果可以从其他`finalizer`索引到对象，则该对象是可达的。 (还有`Java`变体.)
- `GC_INIT() `
  - 在大多数平台上都是可选的。 (必须从主程序调用)
- `GC_FREE()`  
  - 如果你坚持. (通常对大对象有帮助，对小对象有伤害.)
- `GC_MALLOC_IGNORE_OFF_PAGE()` 
  - 像是 `GC_MALLOC()`, 但对于指针指向（接近）大型数组。
- 加上统计数据、增量GC控制、更多分配器变量、堆限制、`GC`频率控制、快速内联分配器等。

---

---

## C++ interface
- "gc_cpp.h" provides a base class gc:
  - Overrides new to be GC_MALLOC for subclasses of gc. 
  - Overrides ::new to be GC_MALLOC_UNCOLLECTABLE. 
  - Provide gc_cleanup class which registers destructor as finalizer. 
  - Built by Detlefs, Hull, based on Ellis, Detlefs work. 
  - ...
- "gc_allocator.h" defines STL allocators:
  - gc_allocator 
  - traceable_allocator
- Particularly gc_cpp.h is annoyingly brittle.
  - Perhaps more so than some of the gross hacks we'll hint at later.
  - Replacing global operator new seems problematic for many compilers.


## `C++`接口
- "`gc_cpp.h`"提供了一个基类`gc`：
  - 为`gc`的子类重写`new`方法当 `GC_MALLOC`。
  - 重写`new::`方法 `GC_MALLOC_UNCOLLECTABLE`。
  - 提供将`destructor`函数注册为`finalizer`的`gc_cleanup`类。
  - 由赫尔的德特勒夫斯建造，基于埃利斯的德特勒夫斯作品。
  - ...
- "`gc_allocator.h`"定义`STL`分配器：
  - `gc_allocator`
  - `traceable_allocator`(可追踪分配器)
- 尤其是`gc_cpp.h`令人恼火的脆弱。
  - 也许比我们稍后将暗示的一些粗俗的黑客行为更重要。
  - 对许多编译器来说，替换全局运算符`new`似乎有问题。

---

## Environment variables

- Collector can be influenced by various environment variables:
  - GC_INITIAL_HEAP_SIZE
  - GC_MAXIMUM_HEAP_SIZE
  - GC_PRINT_STATS
  - GC_DUMP_REGULARLY
  - GC_ENABLE_INCREMENTAL (caution!)
  - GC_PAUSE_TIME_TARGET
  - GC_DON'T_GC
  - GC_IGNORE_GCJ_INFO ignore compiler-provided pointer location information.
  - GC_MARKERS Set the number of GC threads (where supported).
  - ...

### 环境变量

- 回收器可能会受到各种环境变量的影响:
  - `GC_INITIAL_HEAP_SIZE`
  - `GC_MAXIMUM_HEAP_SIZE`
  - `GC_PRINT_STATS`
  - `GC_DUMP_REGULARLY`
  - `GC_ENABLE_INCREMENTAL` (小心使用!)
  - `GC_PAUSE_TIME_TARGET`
  - `GC_DON'T_GC`
  - `GC_IGNORE_GCJ_INFO` 
    - 忽略编译器提供的指针位置信息。
  - `GC_MARKERS` 
    - 设置`GC`线程的数量（如果支持）。
  - ...


---

## How does it work?

Occasionally (when we run out of memory?):

- Mark all objects referenced directly by pointer variables (roots)
- Repeatedly:
  - Mark objects directly reachable from newly marked objects.
- Finally identify unmarked objects (sweep)
  - E.g. put them in free lists.
  - Reuse to satisfy allocation requests.
- **Objects are not moved.**

### 它是如何工作的？
偶尔（当我们的内存用完时？）：
- 标记根能直接引用到的所有对象
- 重复地：
  - 从新的已经标记的对象中标记可达对象。
- 最后识别未标记的对象（清除）
  - 例如: 把他们放在`free list`上。
  - 重用以满足分配内存请求。
- **对象不会移动。**

---

## Mark/sweep illustration

- 第一步(标记):
![](https://raw.githubusercontent.com/danyow/picgo/main/20220409213248.png)

- 第二部(清除)
![](https://raw.githubusercontent.com/danyow/picgo/main/20220409213447.png)


### 标记/清除 插画

从`Stack`(根)出发, 依次标记(绿色对勾)标记可达的`heap`的内存空间. 然后清除未被标记的.

---

## Easy performance issue 

1. 
- If heap is nearly full, we collect too frequently.
  - May collect once per allocation. 
  - We look at all reachable objects each time -> expensive
- Solution:
  - Always make sure that heap is e.g. 1.5 times larger than necessary.
  - Each cycle, allocate n/3 bytes, trace 2n/3 bytes.
  - Trace 2 bytes per byte allocated.
    ![](https://raw.githubusercontent.com/danyow/picgo/main/live-data.png)
2. 
- Performance is often dominated by memory accesses.
- Each reclaimed object is touched twice per cycle.
  - Once during sweep phase.
  - Once during allocation.
- Solution:
  - Sweep a little bit at a time before allocation.
  - Try to keep object in cache.
  - "Sweep phase" is a misnomer.
  - Imposes constraints on GC data structure.

### 简单性能问题

1. 
- 如果堆快满了，我们就回收地更频繁。
  - 每次分配可回收一次。
  - 我们每次都会查看所有可达的对象 -> 昂贵
- 解决方案：
  - 始终确保`heap`比需要的大1.5倍。
  - 每个周期，分配 `n/3` 字节时，跟踪 `2n/3` 字节。
  - 在分配到的内存空间里跟踪前2个字节。

2. 
- 性能通常由内存访问决定。
- 每次循环每个要回收的对象都要被触摸两次。
  - 一次在清除阶段。
  - 一次在分配过程中。
- 解决方案：
  - 分配前清除一点。
  - 尝试将对象保留在缓存中。
  - "清除阶段"用词不当。
  - 对`GC`数据结构施加约束。
---

## Asymptotic Complexity of MarkSweep vs. Copying

- Conventional view:
  - Copying: O(live_data_size)
  - M/S:
    - Mark: O(live_data_size)
    - Sweep: O(heap_size)
    - Total: O(heap_size)
  - M/S more expensive (if heap_size >> live_data_size)
- Alternate view:
  - Sweep doesn't count; part of allocation.
  - M/S can avoid touching pointer-free data (strings, bitmaps)
  - M/S: O(pointer_containing_data)
  - Copying more expensive
    - (if pointer_containing_data << live_data_size)

### 运行时间复杂度 `M&S` vs `Copying`分析.
- 传统观点：
  - `Copying` ：`O(live_data_size)`
  - `M&S`:
    - 标记: `O(live_data_size)`
    - 扫描: `O(heap_size)`
    - 总计: `O(heap_size)`
  - M&S 更昂贵（`heap_size` >> `live_data_size)`
- 另一种观点：
  - 清除不算数分配的一部分。
  - `M&S`可以避免接触无指针数据（字符串、位图）
  - `M&S`: `O(pointer_containing_data)`
  - `Copying` 成本更高
    - （如果 `pointer_containing_data` << `live_data_size` ）

---

## Implementation details overview

![](https://raw.githubusercontent.com/danyow/picgo/main/20220409200001.png)

- General design issues:
  - The underlying allocator.
  - **Pointer validity checks and mark bits.**
  - Partial pointer location information.
  - **Locating potential roots.**
  - Mark algorithm and stack overflow.
  - Thread support.
- Enhancements:
  - **Black-listing of "false pointers"**
  - Incremental/Concurrent/Generational GC.
  - Parallel marking.
  - Thread-local allocation.
  - Finalization.
  - Debug support.

### 实现细节描述

- 一般设计问题：
  - 底层分配器。
  - **指针有效性检查并标记位。**
  - 部分指针位置信息。
  - **寻找潜在的`roots`。**
  - 标记算法和堆栈溢出。
  - 线程支撑。
- 增强功能：
  - **"错误指针"黑名单**
  - 增量/并发/分代`GC`。
  - 平行标记。
  - 线程本地分配。
  - 终结。
  - 调试支持。

---

## Allocator design

- Segregate objects by size, pointer contents...
- Each "page" contains objects of a single size.
- Separate free lists for each small object size.
- Large object allocator for pages, large objects.
- **Characteristics:**
  - **No per object space overhead (except mark bits)**
  - **Small object fragmentation overhead factor:**
    - **< #size classes = O(log(largest_sz/smallest_sz))**
    - **Asymptotically optimal (Robson 71)**
  - **Fast allocation.**
  - **Partial sweeps are possible.**
  - **Can avoid touching pointer-free pages.**


## 分配器设计

- 按大小、指针内容分隔对象...
- 每个`"page"`包含单个大小的对象。
- 每个小对象大小都有单独地`free list`。
- 用于page、大对象的大对象分配器。
- **特点**：
  - **无每对象空间开销（标记位除外）**
  - **小对象碎片开销系数：**
    - **<#size class =`O(log(largest_sz/smallest_sz))`**
    - **渐近最优（`Robson 71`）**
  - **快速分配**。
  - **部分扫描是可能的。**
  - **可以避免触摸无指针`page`。**

---

## Heap layout

![](https://raw.githubusercontent.com/danyow/picgo/main/20220409200042.png)

### 堆布局



---

## Meta-data

- Need mark bit for each object.
- Information for pointer validity & object size, etc.
- Support discontiguous heaps
- Options for mark bits:
  - _In object:_
    - _Objects: must be aligned._
    - _Stealing a bit may require a word._ 
  - _At beginning of each block:_
    - _All mark bits are mapped to few cache lines._
    - _Must touch pages with pointer-free objects._
  - In separate data structure.
    - More instructions for each access.
    - Pointer-free pages are not touched, fewer cache issues.

### 元数据

- 每个对象都需要标记位。
- 指针有效性和对象大小等信息。
- 支持不连续堆
- 标记位的选项：
  - _在对象中：_
    - _对象：必须对齐。_
    - _窃取一个字节可能需要一个单词。_
  - _在每个块的开头：_
    - _所有标记位都映射到几个缓存线。_
    - _必须使用无指针对象触摸页面。_
  - 在单独的数据结构中。
    - 每次访问都有更多说明。
    - 无指针页面不会被触碰，缓存问题更少。

---

## Meta-data lookup

![](https://raw.githubusercontent.com/danyow/picgo/main/20220409200112.png)

`Page descriptor`: 页面描述符
`Mark bits`: 标记位
`Offset Map(later)`: 偏移表（延迟） 
---

## Pointer validity check

- Get page descriptor. Valid heap page?
  - About three memory references.
    - Simple top level hashing scheme for 64-bit addresses.
  - Two with a small cache.
- If not first page of object, adjust.
- Valid offset in valid object?
  - Remainder computation on offset in page gives object start.
  - Remainder can be looked up in table of "valid offsets".
  - Allows pointers to only certain offsets in object to be considered valid. Check is constant time.
  - Small constant number of memory references.
  
### 指针有效性检查
- 获取页面描述符。有效的堆页？
  - 大约三次内存引用。
    - 64位地址只是一个简单顶层哈希方案。
  - 两个有一个小缓存。
- 如果不是对象的第一页，请调整。
- 有效对象中的有效偏移量？
  - 页中偏移量的余数计算使对象开始。
  - 剩余部分可在"有效偏移"表中查找。
  - 只允许指向对象中某些偏移量的指针被视为有效。检查是固定时间。
  - 少量恒定数量的内存引用。

---

## Partial pointer location (type) information.

- It's often easy to determine location of pointers in heap objects (e.g. gcj (Java), Mono (.Net)).
- Collector provides different allocation calls to communicate this.
- Objects are segregated both by size and kind.
- Each kind has associated object descriptor:
  - First n fields are pointers.
  - 30- or 62-bit bitmap identifies pointer locations.
  - Client specified mark procedure.
  - Indirect: descriptor is in object or vtable.


### 部分指针位置（类型）信息。

-通常很容易确定堆对象（例如`GCJ（Java）`、`Mono（.Net）`）中指针的位置。
-收集器提供不同的分配调用来进行通信。
-物体是按大小和种类分开的。
-每种类型都有关联的对象描述符：
  -前n个字段是指针。
  -30位或62位位图标识指针位置。
  -客户指定的标记程序。
  -间接：描述符位于对象或`vtable`中。

---

## Locating roots

- By default roots consist of:
  - Registers
  - Runtime stack(s)
  - Statically allocated data regions
    - Main program + dynamic libraries
- **How do we get their contents/location?**
  - **Registers: abuse setjmp, __builtin_unwind_init, ...**
  - **Runtime stack(s): you don't really want to know.**
    - **Need consistent caller-save reg. snapshot**
  - **Static data segments: you don't want to know that either.**
  - **Very platform dependent**
    - **But you only have to do it once per platform.**

### 定位根
- 默认情况下，`roots`包括：
  - 寄存器
  - 运行时栈
  - 静态分配的数据区域
    - 主程序 + 动态库
- **我们如何得到他们的位置？**
  - **寄存器：滥用`setjmp` `__builtin_unwind_init`...**
  - **运行时栈：你并不想知道。**
    - **需要常量调用保存注册表。快照**
  - **静态数据段：你也不想知道。**
  - **非常依赖平台**
    - **但每个平台只需执行一次。**

---

## Basic mark algorithm

- Maintain explicit mark stack of pairs:
  ![](https://raw.githubusercontent.com/danyow/picgo/main/20220409200205.png)
- Initially:
  - For each individual root, push object.
  - For each root range, push range.
- Then repeatedly:
  - Pop (addr, descr) pair from stack.
  - For each possible pointer in memory described by pair:
    - Check pointer validity. If valid and unmarked:
    - Set mark bit for target. (Already have page descriptor.)
    - Push object address and descriptor (from page descriptor)

### 基本标记算法

- 保持对的显式标记栈：
- 最初：
  - 对于每个根，推入对象。
  - 对于每个根范围，推入范围。
- 然后反复说：
  - 从栈中弹出（`addr`，`descr`）对。
  - 对于成对描述的内存中的每个可能指针：
    - 检查指针的有效性。如果有效且未标记：
    - 为目标设置标记位。（已经有页面描述符。）
    - 推入对象地址和描述符（从页面描述符）

---

## Marker refinements

- Tune as much as possible.
  - This is where the GC spends its time.
- It's the memory accesses that matter.
  - Prefetch object as we push its descriptor on stack.
  - May save 1/3 of mark time.
- Range check possible pointers for plausibility first.
  - Eliminates almost all non-pointers.
- Minor benefit from keeping cache of recently looked up block descriptors.
  - Probably more important for 64 bit platforms.
  - But uncached lookup is already fast.

### 标记改进

- 尽可能多地尝试。
  - 这是`GC`花费时间的地方。
- 重要的是内存访问。
  - 在堆栈上推送描述符时预取对象。
  - 可以节省 1/3 个标记时间。
- 范围首先检查可能的指针的合理性。
  - 消除了几乎所有的非指针。
- 保留最近查找的块描述符的缓存带来的小好处。
  - 对于64位平台可能更重要。
  - 但无缓存查找已经很快了。

---

## The marker core (version pre-7.0)

1. Retrieve mark descriptor from stack.
2. (Possibly retrieve "indirect" descriptor from object.)
3. Look for pointers in object satisfying range check. Immediately prefetch at that address.
4. For each likely nested pointer, processing first one last:
   - Look up header in cache (2 memory references).
   - Get offset from beginning of block.
   - Divide by object size to get object start, and displacement in object.
   - If displacement is nonzero, check table for validity.
   - Check mark bit in header.
   - If not set, set it, get descriptor from block header, push entry on mark stack.


### 标记器核心（7.0之前的版本）
1. 从栈中检索标记描述符。
2. （可能从对象中检索"间接"描述符。）
3. 在满足范围检查的对象中寻找指针。立即预取该地址。
4. 对于每个可能的嵌套指针，最后处理第一个：
   - 在缓存中查找标头（2个内存引用）。
   - 从块的开头获得偏移量。
   - 除以对象大小以获得对象开始和对象中的位移。
   - 如果位移不为零，检查表的有效性。
   - 检查头部的标记位。
   - 如果未设置，则设置它，从块头获取描述符，将条目推入标记栈上。

---

## Marker performance: Why GC needs a fast multiplier.

- **On toy benchmark, small objects., 1x1.4GHz Itanium**
  - **500MB/sec (Peak mem. Bandwidth 6.4GB/sec.)**
  - **About 90 cycles/object. (L3 cache miss ~200cycles)**
- **About 260MB/sec, 180 cycles/object on a 2GHz Xeon.**
- Cache misses matter a lot.
- Divisions are a problem.
  - Can easily multiply by reciprocal.
  - Integer multiply has around 15 cycles latency on IA64.
    - Similar on Pentium 4?
  - Very hard to hide latency.
  - Table lookup of remainder, mark bit per allocation granule (not object)
    wins (~20% on P4 Xeon).
- Could we do multiple header lookups & divisions at once to hide latency? Maybe


### 标记器性能：为什么 `GC` 需要快速乘法器
- **在玩具基准测试中，小对象，`1x1.4GHz` 安腾**
  - **`500MB/s`（峰值内存。带宽 `6.4GB/s`。）**
  - **大约 90 个周期/对象。（`L3 cache`未命中 ~200cycles）**
- **在 `2GHz Xeon` 上大约 `260MB/s`，180 个周期/对象。**
- 缓存未命中很重要。
- 分工是个问题。
  - 可以很容易地乘以倒数。
  - 整数乘法在 `IA64` 上有大约 15 个周期的延迟。
    - `Pentium 4` 类似吗？
  - 很难隐藏延迟。
  - 余数的表查找，每个分配颗粒（非对象）的标记位获胜（在 `P4 Xeon` 上约为 20%）。
- 我们可以一次进行多个标头查找和划分以隐藏延迟吗？也许

---

## What if the mark stack overflows?

- **Likely as you approach memory limit.**
- **Programmers expect to be able to recover from running out-of-memory** 
  - **... although it is almost never 100% reliable, GC or not.**
- We
  - Drop part of stack.
  - Set overflowed flag.
- If flag is set at end of mark phase:
  - Rescan heap. Look for marked -> unmarked pointers.
  - Mark again from such targets.
  - Repeat if necessary.
  - Grow mark stack if possible.
- Never push large number of entries without setting a mark bit.
  - Ensures forward progress.

### 如果标记堆栈溢出
- **可能当您接近内存限制时。**
- **程序员希望能够从内存不足中恢复**
  - **……尽管它几乎从来都不是 100% 可靠的，不管 `GC` 与否。**
- 我们
  - 删除堆栈的一部分。
  - 设置溢出标志。
- 如果在标记阶段结束时设置了标志：
  - 重新扫描堆。寻找标记 -> 未标记的指针。
  - 从这些目标再次标记。
  - 必要时重复。
  - 如果可能，增加标记堆栈。
- 切勿在未设置标记位的情况下推送大量条目。
  - 确保前进。


---

## The "sweep phase"

- Sweep large objects and completely empty pages eagerly.
- Completely empty pages are easily detectable and surprisingly common.
  - Effectively coalesces some small objects very cheaply.
- Sweep small object pages when we encounter an empty free list.
- Separate pages can be swept in parallel.
- Empirically, execution time is almost always dominated by marker.


### 清除阶段 

- 急切地扫描大对象和完全清空页面。
- 完全空白的页面很容易被检测到并且非常普遍。
  - 非常便宜地有效地合并一些小对象。
- 当我们遇到一个空的空闲列表时，扫描小对象页面。
- 可以并行扫描单独的页面。
- 根据经验，执行时间几乎总是由标记支配。

---

## Thread support

- Uncontrolled concurrent mutation of data structures can cause objects to be
  overlooked by marker:

![](https://raw.githubusercontent.com/danyow/picgo/main/20220409200333.png)

- Results in reclaimed reachable objects.
- We stop threads during critical GC phases.
  - Unlike most GCs, threads can be
    stopped anywhere.
- On most platforms, we send each thread a signal, with handshake in handler.
  - Ensures that thread is stopped.
  - Pushes register contents onto the (GC-visible) stack.
- Typically requires that thread creation calls be intercepted by GC.
  - GC substitutes its own thread start routine.
  - Keeps track of threads, shadowing thread library.


### 线程支持

- 数据结构的不受控制的并发突变会导致对象被标记忽略：
- 导致回收的可达对象
- 我们在关键的 `GC` 阶段停止线程。
  - 与大多数 `GC` 不同，线程可以在任何地方停止。
- 在大多数平台上，我们向每个线程发送一个信号，并在处理程序中进行握手。
  - 确保线程停止。
  - 将寄存器内容推送到（`GC` 可见的）堆栈上。
- 通常要求 `GC` 拦截线程创建调用。
  - `GC` 替换它自己的线程启动例程。
  - 跟踪线程，隐藏线程库。

---

## Enhancement 1: Black-listing

- Conservative pointer-finding can cause memory retention:
  ![](https://raw.githubusercontent.com/danyow/picgo/main/20220409200419.png)
- In many cases, this is avoidable.
  - If we see an address near future heap growth:
    ![](https://raw.githubusercontent.com/danyow/picgo/main/20220409200457.png)
  - Don't allocate at location 0x1a34c. 
  - We track pages with bogus pointers to them.
    - Marker updates list.
    - Allocate at most small pointer-free objects there.

### 

- 保守的指针查找会导致内存保留：
- 在许多情况下，这是可以避免的。
  - 如果我们在不久的将来看到一个地址堆增长：
  - 不要在位置 `0x1a34c` 分配。
  - 我们跟踪带有虚假指针的页面。
    - 标记更新列表。
    - 在那里分配最多小的无指针对象。

---

## Black-listing (contd.)

- Can be substantial improvement, especially with large root sets containing
  random, but static data.
- Only dynamic data can cause retention.
  - But dynamically created data is also more likely to disappear later.
- **Usually we see good results with conservative pointer finding, minimal layout information and**
  - **32 bit address space, heaps up to a few 100MB, or**
  - **64-bit address space.**

### 黑名单 (续)
- 可以大幅改进，尤其是对于包含随机但静态数据的大型根集。
- 只有动态数据会导致保留。
  - 但是动态创建的数据也更有可能在以后消失。
- **通常我们会通过保守的指针查找、最少的布局信息和**
  - **32 位地址空间，最多可堆到 `100MB`，或**
  - **64 位地址空间。**
  
---

## Optional enhancements

- Remaining enhancements are (or were)
  implemented and available, but not all combinable.

### 可选增强功能

- 剩余的增强功能已（或曾经）实施并可用，但并非全部可组合。

---

## Generational, Incremental, Mostly Concurrent GC

- Observation:
  - Running marker concurrently establishes invariant:
    - Pointers from marked objects or roots either
      - point to marked objects, or
      - were modified since object was marked.
  - Such a concurrent mark phase can be fixed if we can
    - Identify possibly modified objects (and roots)
    - Mark again from modified objects.
  - **Most generational collectors track modifications with a compiler introduced "write barrier".** 
  - **We use the VM system, e.g.**
    - **Write protect pages (e.g. mprotect for Linux)**
    - **Catch protection faults (e.g. SIGSEGV)**
  - **Free if allocation is rare, but otherwise not ideal.**
- Mostly concurrent GC:
  - Run concurrent marker once.
  - Run fixup marker zero or more times concurrently, preserving invariant, reducing # dirty objects. 
  - Run fixup marker with threads stopped once. 
  - Works, reduces pause times, used in other systems. 
  - Scheduling tricky, requires threads.
- **Incremental GC:**
  - **Do a little "concurrent" marking during some allocations.** 
  - **Amount of marking proportional to allocation.**
  - **Same pause time benefit, no throughput benefit.**
- **Generational GC:**
  - **Leave mark bits set after "full GC", but track dirty pages.** 
  - **"Fixup GC" is minor GC.**

##   分代、增量、大部分并发
- 观察：
  - 运行标记同时建立不变量：
    - 来自标记对象或根的指针
      - 指向标记的对象，或
      - 自标记对象以来已修改。
  - 如果可以的话，可以修复这样的并发标记阶段
    - 识别可能修改的对象（和根）
    - 从修改的对象再次标记。
  - **大多数世代收集器使用引入“写屏障”的编译器来跟踪修改。**
  - **我们使用VM系统，例如**
    - **写保护页面（例如 `Linux` 的 `mprotect`）**
    - **捕获保护故障（例如 `SIGSEGV`）**
  - **如果分配很少，则免费，否则不理想。**
- 主要是并发`GC`：
  - 运行并发标记一次。
  - 同时运行修正标记零次或多次，保持不变，减少#脏对象。
  - 在线程停止一次的情况下运行修复标记。
  - 工作，减少暂停时间，用于其他系统。
  - 调度棘手，需要线程。
- **增量`GC`：**
  - **在某些分配期间做一些“并发”标记。**
  - **标记量与分配成正比。**
  - **相同的暂停时间优势，没有吞吐量优势。**
- **分代`GC`：**
  - **在`“full GC”`之后设置标记位，但跟踪脏页。**
  - **`“Fixup GC”`是次要 `GC`。**


---

## Parallel marking & processor scalability

- As client parallelism increases, eventually we spend all time in sequential
  part of GC.
- Sweeping is done a page at a time & can be parallelized. What about marking?
- Marking is also quite parallelizable.
- First, and most thoroughly, done by Endo, Taura, and Yonezawa (SC97, 64 processor machine).
- Our distribution contains simpler version ...

### 并行标记和处理器

- 随着客户端并行度的增加，最终我们将所有时间都花在了 `GC` 的顺序部分。
- 扫描一次完成一页并且可以并行化。标记呢？
- 标记也是相当可并行的。
- 首先，也是最彻底的，由 `Endo`、`Taura` 和 `Yonezawa`（`SC97`、64 处理器机器）完成。
- 我们的发行版包含更简单的版本...

---

## Parallel marking

- For n processors, we have n-1 threads waiting to help with next GC.
- Global mark stack becomes queue.
- Each marker thread regularly:
  - Removes a few entries from queue tail.
  - Marks from those using a local mark stack.
- Mark bits are shared between marker threads.
  - Either use mark bytes, or atomic-compare-and-swap.
    - Mark bytes usually win. (1/8 - 1/16 memory overhead.)
  - Work may be duplicated but rarely is.
- Load balance by returning part of local stack to top of queue
  - When local mark stack overflows.
  - When it notices empty global queue.
- Seems to scale adequately, at least for small SMPs.
  - Limit appears to be bus bandwidth.

### 并行标记
- 对于 `n` 个处理器，我们有 `n-1` 个线程等待帮助下一次 `GC`。
- 全局标记栈变成队列。
- 每个标记线程定期：
  - 从队列尾部删除一些条目。
  - 使用本地标记堆栈的标记。
- 标记位在标记线程之间共享。
  - 要么使用标记字节，要么使用原子比较和交换。
    - 标记字节通常会获胜。（1/8 - 1/16 内存开销。）
  - 工作可能会重复，但很少会重复。
- 通过将部分本地堆栈返回到队列顶部来进行负载平衡
  - 当本地标记堆栈溢出时。
  - 当它注意到空的全局队列时。
- 似乎可以充分扩展，至少对于小型 `SMP` 而言。
  - 限制似乎是总线带宽。

---

## Parallel marking data structure

![](https://raw.githubusercontent.com/danyow/picgo/main/20220409200629.png)

---

## Thread-local allocation buffers

- Malloc/free implementations acquire and release a lock twice per object
  allocation/deallocation:
  - Once per allocation.
  - Once per deallocation.
- Garbage collectors avoid per-deallocation lock.
- We can also avoid per-allocation lock!
- **Use per-thread allocation caches.**
  - **Each thread allocates a "bunch" of memory.**
    - **Single lock acquisition.** 
  - **Dividing it up doesn't require a lock.**
  - **Easy with linear allocation, but also possible here.**

### 线程局部分配
- Malloc/free 实现每次对象分配/释放两次获取和释放锁：
  - 每次分配一次。
  - 每次释放一次。
- 垃圾收集器避免每次释放锁。
- 我们还可以避免按分配锁！
- **使用每线程分配缓存。**
  - **每个线程分配一个“一堆”内存。**
    - **单锁获取。**
  - **分割它不需要锁。**
  - **线性分配很容易，但在这里也是可能的。**

---

## Thread-local allocation details

- Each thread has array of small object free-list headers.
- Each header contains either:
  - Count of allocated objects of that size.
  - Pointer to local free list.
- To allocate:
  - For small counts, increment count, allocate from global free list.
  - For count at threshold, or empty free-list, get a page of objects.
  - For nonempty free-list, allocate from local free-list.

### 线程局部分配细节

- 每个线程都有一组小对象空闲列表头。
- 每个标头都包含：
  - 该大小的已分配对象的计数。
  - 指向本地空闲列表的指针。
- 分配：
  - 对于小计数，增加计数，从全局空闲列表中分配。
  - 对于阈值计数或空空闲列表，获取对象页面。
  - 对于非空空闲列表，从本地空闲列表中分配。

---

## Finalization

- Finalizable objects are added to a growable hash table.
- After each GC, we walk this hash table two or three times:
  - Mark all objects reachable from objects in the table.
    - But not the objects in the table themselves.
    - Table entries contain the procedures to do this marking to handle variants
      like Java.
  - Enqueue still unmarked objects in the table for finalization, and possibly
    mark them.
  - Possibly mark objects reachable from finalizable objects. (Java style
    finalization only.)
- Process finalizable objects, preferably in separate thread, once allocation
  lock is released. (See POPL 2003 paper.)
- Weak pointers ("disappearing links") are handled similarly.

### 终结

- 可终结对象被添加到可增长的哈希表中。
- 每次 `GC` 之后，我们会遍历这个哈希表两到三遍：
  - 标记从表中的对象可到达的所有对象。
    - 但不是表中的对象本身。
    - 表条目包含执行此标记以处理 `Java` 等变体的过程。
  - 将表中仍未标记的对象排入队列以进行最终确定，并可能标记它们。
  - 可能标记可从可终结对象到达的对象。（仅限 `Java` 风格的最终确定。）
- 一旦分配锁被释放，最好在单独的线程中处理可终结的对象。（参见 `POPL 2003` 论文。）
- 弱指针（“消失的链接”）的处理方式类似。


---

## Finalization (quick observations)

- Finalization is moderately expensive.
  - Extra space overhead.
  - Tracing cost is significantly higher, even with Java-style finalization
    (factor of 5?)
- Clients should avoid registering unnecessary finalizers.
  (JVMs can do this statically.)
- Finalizers do not affect performance of the rest of the GC.
- Finalizers must introduce concurrency (even if we had a simple reference
  counting collector). There is no such thing as deterministic finalization for
  heap objects.
  - Collector runs them in GC_malloc by default. This is a bug except in very
    simple cases. Use GC_finalizer_notifier.
  - Concurrency is tricky. Be careful.

### 终结(快速观察)

- 最终确定的成本适中。
  - 额外的空间开销。
  - 跟踪成本明显更高，即使使用 `Java` 风格的终结（5 倍？）
- 客户端应避免注册不必要的终结器。（`JVM` 可以静态地执行此操作。）
- 终结器不会影响 `GC` 其余部分的性能。
- 终结器必须引入并发性（即使我们有一个简单的引用计数收集器）。堆对象没有确定性终结之类的东西。
  - 收集器默认在 `GC_malloc` 中运行它们。除了非常简单的情况外，这是一个错误。使用 `GC_finalizer_notifier`。
  - 并发是棘手的。当心。

---

## Debugging support

- Debug allocators "wrap" each object with extra information:
  - Source file, line number of allocation site.
  - Possibly a stack trace for allocation site.
  - Space for a back pointer. (Should be elsewhere...)
  - Requested object size.
  - Magic (address dependent) numbers before and after object.
- Can mostly tolerate a mixture of wrapped and unwrapped objects.
  - Relies on "magic numbers".
  - May lead to extra error reports.

- 调试分配器用额外的信息“包装”每个对象：
  - 源文件，分配站点的行号。
  - 可能是分配站点的堆栈跟踪。
  - 后向指针的空间。（应该在别处……）
  - 请求的对象大小。
  - 对象前后的魔术（地址相关）数字。
- 大多数情况下可以容忍包裹和未包裹物体的混合。
  - 依靠“幻数”。
  - 可能导致额外的错误报告。

---

## Debugging facilities

- GC can check for overwrite errors.
- Various error checks in GC_debug routines.
- Can be configured for leak detection.
- Can tell you whether a single misidentified pointer might result in unbounded
  space leak (See POPL 2002)
- Can give back-traces of random heap samples (requires different build flags):
  ```log
    ****Chose address 0x81ac567 in object 0x81ac568 (trace_test.c:13, sz=8,
    PTRFREE)
    Reachable via 0 levels of pointers from offset 4 in object:
    0x8192090 (trace_test.c:11, sz=8, NORMAL)
    Reachable via 1 levels of pointers from offset 0 in object:
    0x81920b8 (trace_test.c:11, sz=8, NORMAL)
    Reachable via 2 levels of pointers from root at 0x8055bd4
  ```

### 调试设施

- `GC` 可以检查覆盖错误。
- `GC_debug` 例程中的各种错误检查。
- 可配置用于泄漏检测。
- 可以告诉您单个错误识别的指针是否可能导致无限空间泄漏（参见 `POPL 2002`）
- 可以提供随机堆样本的回溯（需要不同的构建标志）：

---

## Current state

- Easily available (google "garbage collector")
- Supports Linux, Unix variants, Windows, MacOSX,
- Used in a variety of C/C++ systems
  - w3m, vesta, ...
  - High end Xerox printers.
  - Sometimes as leak detector (e.g Mozilla).
  - Usually with little type information.
- Used in many language runtimes:
  - Gcj (gcc), Mono, Bigloo Scheme
  - Usually with heap type information.
  - Information on static data (e.g. 4.5MB for gcj) would be easy and useful.
- **Current version 6.3; 6.4 should appear shortly.**
- **Stay tuned for 7.0alpha1 (cleaner code base, ...)**


- 容易获得（百度一下“垃圾收集器”）
- 支持 `Linux`、`Unix` 变体、`Windows`、`MacOSX`、
- 用于各种 `C/C++` 系统
  - `w3m`, `vesta`, ...
  - 高端施乐打印机。
  - 有时用作检漏仪（例如 `Mozilla`）。
  - 通常只有很少的类型信息。
- 在许多语言运行时中使用：
  - `Gcj (gcc)`、`Mono`、`Bigloo` 方案
  - 通常带有堆类型信息。
  - 有关静态数据的信息（例如，`gcj` 为 `4.5MB`）将是简单而有用的。
- **当前版本 `6.3`；`6.4` 应该很快就会出现。**
- **请继续关注 `7.0alpha1`（更简洁的代码库，...）**

---

## Performance characteristics

- We use GCBench here.
  - More of a sanity check than a benchmark. 
  - Allocates complete binary trees of varying depths.
  - Depth n -> 2 n - 1 nodes of 2 pointers + 2 ints
  - Translated to multiple source languages.
  - Can see effect of object lifetime. 
  - About as realistic as any toy benchmark (not very)

### 性能特点

- 我们在这里使用 `GCBench`。
  - 与其说是基准，不如说是健全性检查。
  - 分配不同深度的完整二叉树。
  - 深度 n -> 2 n - 2 个指针的 1 个节点 + 2 个整数
  - 翻译成多种源语言。
  - 可以看到对象生命周期的影响。
  - 与任何玩具基准一样逼真（不是非常）

---

## GCBench vs HotSpot 1.4.2 client

![](https://raw.githubusercontent.com/danyow/picgo/main/20220409200803.png)

---

## C/C++ GCBench Comparison

- Compare:
  - C with malloc/free
    - "Pause" is tree deallocation time (predictable).
  - Boost classic reference counting (simple and tuned version)
    - "Pause" is recursive deallocation time during assignment(unpredictable).
  - Boost versions use C++ benchmark.
  - Expl. free and BDW GC use C version.
  - HotSpot uses Java version.


### C/C++ `GCBench` 比较

- 比较：
  - `C` 带 `malloc/free`
    - “暂停”是树释放时间（可预测）。
  - 提升经典引用计数（简单和调整的版本）
    - “暂停”是分配期间的递归释放时间（不可预测）。
  - `Boost` 版本使用 `C++` 基准测试。
  - 解释。`free` 和 `BDW GC` 使用 `C` 版本。
  - `HotSpot` 使用 `Java` 版本。


---

## Execution time (msecs, 2GHz Xeon) vs. alternatives

![](https://raw.githubusercontent.com/danyow/picgo/main/20220409200836.png)


---

## Max. space usage (MB) vs. others

![](https://raw.githubusercontent.com/danyow/picgo/main/20220409200856.png)

---

## Max pause time (msecs) vs. others

![](https://raw.githubusercontent.com/danyow/picgo/main/20220409200917.png)

---

## But:

- GCBench uses small objects.
- Allocation + GC cost is proportional to object size.
- **Redo experiment with 128 extra null pointer per node.**

### 但是

- `GCBench` 使用小对象。
- 分配 + `GC` 成本与对象大小成正比。
- **重做实验，每个节点有 128 个额外的空指针。**

---

## Large objects(msecs, MB, 2GHz Xeon)

![](https://raw.githubusercontent.com/danyow/picgo/main/20220409200955.png)

---

## Large objects(thread-safe)

![](https://raw.githubusercontent.com/danyow/picgo/main/20220409201050.png)

---

## Some older measurements on malloc benchmarks

- These are a bit obsolete, things have probably improved, but ...
- Measured on 4xPPro (which was obsolete then).

### `malloc`基准上的一些旧测量

- 这些有点过时了，情况可能有所改善，但是...
- 在 `4xPPro`（当时已经过时）上测量。

---

## Ghostscript throughput

![](https://raw.githubusercontent.com/danyow/picgo/main/20220409201114.png)

---

## MT_GCBench2 throughput

![](https://raw.githubusercontent.com/danyow/picgo/main/20220409201152.png)

---

## Larson (slightly mod.) benchmark throughput

![](https://raw.githubusercontent.com/danyow/picgo/main/20220409201215.png)

---

## Larson-small throughput

![](https://raw.githubusercontent.com/danyow/picgo/main/20220409201301.png)

---

## Other experiences

- Generally works quite well for small (< 100MB live data)
  clients or on 64-bit machines.
  - Sometimes needs a bit pointer location information for frequently occurring
    heap objects. Usually GC_MALLOC_ATOMIC is sufficient for C code.
- Some successful uses with much larger heaps.
- Some problems with 500MB heaps on 32-bit machines.
- Large arrays (> about 1MB) sometimes problematic.
- Fragmentation cost (for heaps > a few MB) is typically less than a factor of
  2.
  - Fragmentation essentially never an issue for small objects.
  - Whole block coalescing is important.
- I haven't seen much of a problem with long running apps.
  (Vesta, Xerox printers).
- Stationary objects allow one word object headers in gcj.


- 通常适用于小型（< `100MB` 实时数据）客户端或 64 位机器。
  - 有时需要频繁出现的堆对象的位指针位置信息。通常 `GC_MALLOC_ATOMIC` 对于 C 代码就足够了。
- 一些成功的使用更大的堆。
- 32 位机器上 `500MB` 堆的一些问题。
- 大型数组（> 大约 `1MB`）有时会出现问题。
- 碎片成本（对于 > 几 `MB` 的堆）通常小于 2 倍。
  - 对于小物体来说，碎片化基本上不是问题。
  - 整个块合并很重要。
- 我没有看到长时间运行的应用程序有什么问题。（`Vesta`，`Xerox printers`）。
- 固定对象允许在 `gcj` 中使用一个单词对象标题。

---

## Space overhead of conservative GC

- Clever empirical study:
  - Hirzel, Diwan, Henkel, "On the Usefulness of Type and Liveness Accuracy for
    Garbage Collection", TOPLAS 24, 6, November 2002.
    - Liveness information is usually more important than type information,
      especially on 64-bit platforms.
    - Up to 62% space overhead.
- More theoretical study:
  - Boehm, "Bounding Space Usage of Conservative Garbage Collectors", POPL 2002.

- 巧妙的实证研究：
  - `Hirzel`, `Diwan`, `Henkel`，“关于垃圾收集的类型和活性准确性的有用性”，`TOPLAS 24, 6, November 2002`。
    - 活性信息通常比类型信息更重要，尤其是在 64 位平台上。
    - 高达 62% 的空间开销。
- 更多理论研究：
  - `Boehm`，“保守垃圾收集器的边界空间使用”，`POPL 2002`。

---

## Conclusions

- Collector is still a useful tool for
  - Avoiding manual memory management issues in C/C++.
  - Quickly building language runtimes, especially, but not only, for research
    systems.
  - Some GC research. (One underlying algorithm, mult. languages.)
- Performance is competitive with malloc/free.
  - Usually wins for threads + small objects.
- Tracing performance is very close to best commercial JVMs.
  - See also Smith and Morrisett, ISMM 98.
  - Currently does less well when there is a large benefit from generational
    GC. (But see OOPSLA 2003 paper by Barabash et al.)
- There may be a cache cost to free list allocation.
  - See work by Blackburn, Cheng, and McKinley.
  - But I don't think we fully understand this yet...

### 

- 收集器仍然是一个有用的工具
  - 避免 `C/C++` 中的手动内存管理问题。
  - 快速构建语言运行时，尤其是但不仅限于研究系统。
  - 一些 `GC` 研究。（一种底层算法，多种语言。）
- 性能与 `malloc/free` 具有竞争力。
  - 通常赢得线程+小对象。
- 跟踪性能非常接近最好的商业 `JVM`。
  - 另见 `Smith` 和 `Morrisett，ISMM 98`。
  - 当分代 `GC` 有很大的好处时，目前做得不太好。（但请参阅 `Barabash` 等人的 `OOPSLA 2003` 论文。）
- 空闲列表分配可能会产生缓存成本。
  - 参见 `Blackburn`、`Cheng` 和 `McKinley` 的作品。
  - 但我认为我们还没有完全理解这一点......

---

