---
id: memory
title: 内存管理
slug: /audition/memory
---


# 内存管理

## 手动内存管理

## 自动内存管理

### 引用计数式

本身就存在着循环引用这个问题, `ObjectC`的`ARC`针对循环引用采用了 `weak` 标记.

### 垃圾回收式

#### 标记清除式

根对象

[barrier屏障](https://www.bilibili.com/read/cv8005006/)

#### `Lua` 的垃圾回收

在 `Lua5.0` 以及之前版本, 采用的回收算法是双色标记, 也就是说那时候的对象非黑即白, 那么就会有一个问题在 `GC` 的回收阶段过程中,
新建了对象, 如果标记为白色, 就会被立即回收, 标记为黑色, 也就意味着没扫描就以及视作不可回收也不合理.

```c
#define GCSpropagate            0           // 传播阶段：标记对象
#define GCSatomic               1           // 原子阶段：一次性标记
#define GCSswpallgc             2           // 清扫allgc
#define GCSswpfinobj            3           // 清扫finobj
#define GCSswptobefnz           4           // 清扫tobefnz
#define GCSswpend               5           // 清扫结束
#define GCScallfin              6           // 调用终结函数(__gc)
#define GCSpause                7           // 停止
```

[lua垃圾回收机制(CSDN)](https://blog.csdn.net/summerhust/article/details/104782072)
[Garbage Collection in Lua(Youtube)](https://www.youtube.com/watch?v=wGizKsOJQuE)

## Automatic Memory Management

- Releases memory automatically, when it is not needed anymore.
- Two main approaches:
  - Reference counting
  - Garbage collection
- Lua uses garbage collection.
  - main reason: in dynamically-typed languages, reference count adds overhead
    even if a program never allocates memory.


