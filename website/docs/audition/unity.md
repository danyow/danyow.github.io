---
id: unity
title: Unity
slug: /audition/unity
---

# 一问一答 (Unity篇)

## `Unity` 是否支持写成多线程程序? 如果支持的话需要注意什么?

1. 仅能重主线程中访问 `Unity` 的组件, 对象和系统调用.
2. 支持: 如果同时需要处理很多失修或者与 `Unity` 的对象互动小的可以使用 `thread`, 否则使用 `coroutine`
3. 注意: `C#` 中有 `lock` 这个关键字, 以确保只有一个线程可以在特定事件内访问特定的对象

## `Unity` 的协程和 `C#` 的线程区别是什么?

1. 多线程程序同时运行多个线程, 而在任一指定时刻只有一个协程在运行, 并且这个正在运行的协同程序只在必要的时候才被挂起.
2. 除主线程之外的线程无法访问 `Unity`的组件, 对象, 方法.
3. 在主线程运行时同时开启另一段逻辑处理, 来协助当前程序的执行, 换句话说, 开启协程就是开启一个线程, 可以用来控制运动和序列以及对象的方法.

## 四元数的作用, 四元数对欧拉角的优点?

1. 能进行增量旋转
2. 避免万向锁
3. 给定方位的表达方式只有两种, 互为负, 而欧拉角有无数种表达方式.

## 向量的点乘, 叉乘以及归一化的意义?

1. 点乘描述了两个向量的相似程度, 结果越大两向量越相似, 还可以表示投影
2. 叉乘得到的向量表示垂直于原来的两个向量
3. 标准化向量: 用在只关系方向, 不关心大小的时候

## 在场景中放置多个`Camera`并同时处于活动状态会发生什么?

实际看到的画面由多个camera的画面组成 由 `depth` `Clear Flag` `Culling Mask`(遮罩剔除)都会影响其最终合成效果.

## `Prefab`的作用? 如何在移动环境的设备恰当使用?

在游戏运行实例化, `prefab` 相当于一个模板, 对你已有的素材, 脚本, 参数做一个默认配置, 以便于以后修改, 同时 `prefab`
打包的内容简化了导出的操作, 便于团队的交流.

## 如何在不同工程安全地迁移数据

1. 将`Assets`目录和`Library`目录一起迁移
2. 导出包
3. 用`Unity`自带的`Assets Server`功能

## `MeshRender`中`Material`和`SharedMaterial`的区别?

修改`SharedMaterial`将改变所有使用这个材质的物体的外观, 并且也会改变存储在工程里的材质设置. 不推荐修改`SharedMaterial`
返回的材质. 如果实在想修改渲染器的材质, 使用`Material`代替.

## 请描述游戏动画有哪几种及其原理?

1. 关节动画: 把角色分成若干独立部分, 一个部分对应一个网格模型, 部分的动画连接成一个整体的动画, 角色比较灵活. 其中`Quake2`内使用了该动画.
2. 单一网格模型动画: 由一个完整的网格模型构成, 在动画序列的关键帧里记录各个顶点的原位置及其改变量, 然后插值运算实现动画效果, 角色动画较真实
3. 骨骼动画: 广泛应用的动画方式, 集成了以上两个方式的优点, 骨骼按角色特点组成一定的层次结构, 由关节相连, 可做相对运动,
   皮肤作为单一网格蒙在骨骼之外, 决定角色的外观, 皮肤每一个顶点都会受到骨骼的影响, 从而实现完美的动画. (骨骼动画时由关节动画发展而来的,
   如今基本都使用骨骼动画来实现角色动画).

## `Alpha` `Blend` 的工作原理?

实际显示颜色 = 当前颜色 * `Alpha` / 255 + 背景颜色 * (255 - `Alpha`) / 255

$$

Color = \frac{Current * Alpha}{255} + \frac{BackgroundColor * (255 - Alpha)
}{255}

$$

## `LOD`是什么? 优缺点是什么?

`LOD`技术即`Levels of Detail`的简称, 意为多细节层次.

`LOD`技术指根据物体模型的节点在显示环境中所处的位置和重要度, 决定物体渲染的资源分配, 降低非重要物体的面数和细节度, 从而获得高效率的渲染运算.

1. 优点: 可根据距离动态的选择渲染不同细节的模型
2. 缺点: 加重美工的负担, 要准备不同细节的同一模型, 同样的会稍微增加游戏的容量.

## `MipMap`是什么? 作用?

在三维计算机图形的贴图渲染中有一个常用的技术被称为`MiaMapping`.为了加快渲染速度和减少图像锯齿,
贴图被处理由一系列被预先计算和优化过的图片组成的文件, 这样的贴图被称为`MipMap`

## 碰撞器和触发器的区别?

`collider`碰撞器会有碰撞效果, `isTrigger = false`, 可以调用`OnCollisionEnter/Stay/Exit`函数.

`trigger`触发器没有碰撞效果, `isTrigger = true`, 可以调用`OnTriggerEnter/Stay/Exit`函数.

## 物体发生碰撞的必要条件?

其一必须带有`collider+rigidbody`或者`characterController`, 另一物体也必须至少带有`collider`

## 什么叫做链条关节?

`Hinge Joint`, 他可以模拟两个物体间用一根链条连接在一起的情况,能保持两个物体在一个固定距离内部相互移动而不产生作用力,
但是达到固定距离后就会产生拉力. (简单说就是弹簧)

## `Unity`从唤醒到销毁有一段生命周期, 请列出系统自己调用的几个重要方法.

![](https://raw.githubusercontent.com/danyow/picgo/main/20220410193239.png)

`Awake` -> `OnEnable` -> `Start` ->`Update` -> `FixedUpdate` -> `LateUpdate`
-> `OnDisable` -> `OnDestroy`

`FixedUpdate`: 每固定帧绘制时执行一次, 和 `update` 不同的是 `FixedUpdate` 是渲染帧执行,
如果你的渲染效率底下的时候 `FixedUpdate` 调用次数就会跟着下降.

`FixedUpdate`比较适用于物理引擎的计算, 因为是跟每帧渲染有关.

`Update` 就比较适合做控制.

## 垃圾回收

`Unity` 现在还是使用了相对比较保守的内存回收，也就是贝母回收，它有几个特点：

- 不分代、不合并，所以它可能会导致内存碎片。
- 所有保守式内存回收全都是非精准式回收。

### 非精准式回收

非精准的含义有两个：

1. 已经分配出去的内存，但没有人在引用它的情况下，不一定能收的回来。
2. 没有分配使用的内存，当想去分配使用的时候，也不一定用的了。


## 动态加载资源的方式

1. `Resources.Load`
  - 只能加载`Resources`下的资源
2. 网络请求`WWW(弃用)`或者`UnityWebRequest`
  - 任意位置, 比方远程服务器
  - 或者本地路径
3. `AssetBundle.LoadFromFile`
4. `Addressable`
  - 3是4的底层实现

## 坐标空间

确保矩阵线性/仿射变换的便利

1. 模型空间(局部空间/对象空间) 左手系
2. 世界空间
3. 观察空间
4. 剪裁空间
  - 正交到透视
5. 屏幕空间
6. ~~切线空间~~

[Shader入门（8）各种坐标空间的定义和变换演示](https://blog.csdn.net/jiumaol/article/details/105281257)


## 生命周期方法可以用协程返回

