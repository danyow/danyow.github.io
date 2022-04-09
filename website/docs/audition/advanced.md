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

SPFA算法

## A星 寻路

把代价拆分成了两个 一个是路径(出发到当前)代价, 一个是搜索(当前到目的)代价

## 跳点 JPS

找到强制邻居及其跳点, 再次搜索, 有相对较多的优化, 速度较快, 不再是性能问题

[跳点搜索算法JPS及其优化](https://blog.csdn.net/yjxxtd/article/details/93506231)
