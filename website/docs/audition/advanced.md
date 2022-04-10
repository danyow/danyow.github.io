---
id: advanced
title: 高级
slug: /audition/advanced
---

# 一问一答 (高级篇)

[寻路相关](https://www.redblobgames.com/)

## BFS 广度优先搜索

蚊香型的搜索算法

## DFS 深度优先搜索

一个网页的一个链接一直点, 点到头回溯一点继续点

## Dijkstra 最短路径

单源最短路径, 两个数组一加一减少,两点贪婪计算

## Floyd-Warshall 最短路径

各个顶点最短路径, 距离矩阵和前驱矩阵遍历更新
[视频教程](https://www.bilibili.com/video/BV1K5411f7G7)

## Bellman-Ford 最短路径

单源最短路径, 不适合游戏寻路, 算是算法里面的内容, 可以计算负权的图论 适合找负环 采用对边松弛
[视频教程](https://www.bilibili.com/video/BV1p44y1W78N)

`SPFA`算法

## A星 寻路

把代价拆分成了两个 一个是路径(出发到当前)代价, 一个是搜索(当前到目的)代价

## 跳点 JPS

找到强制邻居及其跳点, 再次搜索, 有相对较多的优化, 速度较快, 不再是性能问题

[跳点搜索算法JPS及其优化](https://blog.csdn.net/yjxxtd/article/details/93506231)

## 协程

[微软文档](https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/concepts/async/task-asynchronous-programming-model)

[C# Async/Await原理剖析](https://blog.csdn.net/weixin_43990579/article/details/105417652)
![](https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/concepts/async/media/task-asynchronous-programming-model/navigation-trace-async-program.png#lightbox)

> Async/Await是如何实现暂停后续代码的执行，将控制权交还给调用者，而在异步操作完成时继续执行后续代码的？


```csharp
// Async的异步操作
public async Task<ProjectVo> GetAsync(long projectId) 
{
    // 等待第一个异步操作完成
    Project resultOfAwaiter1 = await projectRepo.GetAsync(projectId);
    // 等待第二个异步操作完成
    List<Person> resultOfAwaiter2 = await personRepo.GetAsync(project.getMembers());
    // 将结果合并返回
    ProjectVo result = ToProjectVo(resultOfAwaiter1, resultOfAwaiter2);
    return result;
}
```

```csharp
[AsyncStateMachine(typeof (ProjectService.GetAsync_StateMachine))]
public Task<ProjectVo> GetAsync(long projectId)
{
    MainWindow.AwaitButtonClick_StateMachine stateMachine = new MainWindow.AwaitButtonClick_StateMachine();
    stateMachine.caller = this;
    stateMachine.projectId = projectId;
    stateMachine.builder = AsyncTaskMethodBuilder<ProjectVo>.Create();
    // ======>0: 赋值默认值(主线程)
    stateMachine.state = -1;
    // Start方法内部执行 -> stateMachine.MoveNext()
    stateMachine.builder.Start<ProjectService.GetAsync_StateMachine>(ref stateMachine);
    // 返回一个新的task（可能完成也可能未完成）
    return stateMachine.builder.Task;
}

[CompilerGenerated]
// 会IL生成一个类型为AwaitButtonClick_StateMachine的类
private sealed class GetAsync_StateMachine : IAsyncStateMachine
{
    // 最重要的状态机变量
    public int state;
    
    public AsyncTaskMethodBuilder<ProjectVo> builder;
    public ProjectService caller;
    // 原函数的传入参数
    public long projectId;
    
    // 两个等待器的结果
    private Project resultOfAwaiter1;
    private List<Person> resultOfAwaiter2;
    
    // 需要返回的结果
    private ProjectVo result;
    
    // 那两个异步操作的等待器
    private TaskAwaiter<Project> awaiter1;
    private TaskAwaiter<List<Person>> awaiter2;

    // ======>6: 第一个等待器的子线程调用了这个方法, 并且已经完成了(这里确保了这个循环`MoveNext`不会阻塞主线程)(子线程1)
    // ======>13: 第二个等待器的子线程过来了(子线程2)
    void IAsyncStateMachine.MoveNext()
    {
        try
        {
            switch (this.state)
            {
                case 0:
                    // ======>7: 修改状态为-1 为继续等待下一个等待器完成任务.(子线程1)
                    this.state = -1;
                    break;
                case 1:
                    this.state = -1;
                    // ======>14: 修改状态为-1, 同时跳转到 `label_8` 上, 不需要`break`了(子线程2)
                    goto label_8;
                case -1:
                    // ======>1: 第一次进来得到第一个等待器(主线程)
                    // 开始第一个Task并获得awaiter，通过awaiter来观察Task是否完成。
                    this.awaiter1 = this.caller.projectRepo.GetAsync(this.projectId).GetAwaiter();
                    // ======>2: 并没有完成(主线程)
                    if (!this.awaiter1.IsCompleted)
                    {
                        // ======>3: 修改状态, 这里比较重要, 因为 `state >= 0` 标记着为第几个 `await`, 此时为第一个也就是0(主线程)
                        this.state = 0;   
                        // 向未完成的Task中注册continuation action;
                        // continuation action会在Task完成时执行;
                        // 等同于awaiter1.onCompleted(() => this.MoveNext());
                        // ======>4: 内部其实开启了子线程去请求启动 `MoveNext()` 但是在当下还是(主线程)
                        this.builder.AwaitUnsafeOnCompleted<TaskAwaiter<Project>, ProjectService.GetAsync_StateMachine>(ref this.awaiter1, ref this);
                        // ======>5: 此时主线程return（即交出控制权给GetAsync的调用者）
                        return;
                    }
                    break;
            }
            // 第一个Task完成，获取结果
            // ======>8: 获取到第一个等待器的结果(子线程1)
            this.resultOfAwaiter1 = this.awaiter1.GetResult();
            // 开始第二个Task
            // ======>9: 得到第二个等待器(子线程1)
            this.awaiter2 = this.caller.personRepo.GetAsync(resultOfAwaiter1.getMembers()).GetAwaiter();
            if (!this.awaiter2.IsCompleted)
            {
                // ======>10: 修改状态, 由刚刚的 0 -> -1 -> 1 切换了两次状态(子线程1)
                this.state = 1;
                // 向未完成的Task中注册continuation action
                // ======>11: 开辟第二个子线程同时准备结束子线程1, 和上面4同理请求结束后会调用`MoveNext`.(子线程1)
                this.builder.AwaitUnsafeOnCompleted<TaskAwaiter<List<Person>>, ProjectService.GetAsync_StateMachine>(ref this.awaiter2, ref this);
                // ======>12: 此时子线程1->return 
                return;
            }
label_8: // 标记，用于goto跳转
            // 第二个Task完成，获取结果
            // ======>15: 获取到第二个等待器的结果(子线程2)
            this.resultOfAwaiter2 = this.awaiter2.GetResult();
            // ======>16: 此时所有结果获取完毕, 赋值结果(子线程2)
            this.result = this.caller.ToProjectVo(this.resultOfAwaiter1, this.resultOfAwaiter2);
        }
        catch (Exception ex)
        {
            this.state = -2;
            this.builder.SetException(ex);
            return;
        }
        // ======>17: 最后修改状态为终结态, 失败也是赋值为-2, 标记为完成.
        this.state = -2;
        // 将builder标记为completed；
        // 将未完成的task标记为completed；（这里的task指GetAsync的返回值）
        // set result并run continuation；
        // ======>18: 赋值最终结果.
        this.builder.SetResult(this.result);
    }
}
```

由上我们可以得出：

1. `AsyncStateMachine`内部状态的数量`n+2`，`n`即`async`方法体内`await`出现的次数。
2. `AsyncStateMachine`的状态为非负整数时，它会暂停执行并交出控制权，只有当它的状态为-1时才会继续执行。
3. 如果足够幸运，只调用一次`MoveNext`就可以让`AsyncStateMachine`变成最终状态（-2）。