# 拓扑排序

在计算机科学领域，有向图的拓扑排序（Topological Sort）是对其顶点的一种线性排序，使得对于每条有向边 `(u, v)`，顶点 `u` 在排序中都出现在顶点 `v` 之前。

例如，图中的顶点可以表示要执行的任务，而边表示一个任务必须在另一个任务之前执行的约束；在这种应用中，拓扑排序就是任务的有效顺序。

只有当图没有有向环时，即为[有向无环图](https://en.wikipedia.org/wiki/Directed_acyclic_graph)（DAG），才可能存在拓扑排序。任何DAG都至少有一个拓扑排序，而且已知的算法可以在线性时间内构造任何DAG的拓扑排序。

![有向无环图](https://upload.wikimedia.org/wikipedia/commons/c/c6/Topological_Ordering.svg)

有向无环图的拓扑排序：每条边从排序中的较早顶点（左上）指向较后顶点（右下）。有向图是无环的当且仅当它有一个拓扑排序。

## 示例

![拓扑排序](https://upload.wikimedia.org/wikipedia/commons/0/03/Directed_acyclic_graph_2.svg)

上图展示了许多有效的拓扑排序，包括：

- `5, 7, 3, 11, 8, 2, 9, 10`（从左到右、从上到下）
- `3, 5, 7, 8, 11, 2, 9, 10`（选择编号最小的可用顶点）
- `5, 7, 3, 8, 11, 10, 9, 2`（选择边数最少的顶点）
- `7, 5, 11, 3, 10, 8, 9, 2`（选择编号最大的可用顶点）
- `5, 7, 11, 2, 3, 8, 9, 10`（从上到下、从左到右尝试）
- `3, 7, 8, 5, 11, 10, 2, 9`（任意顺序）

## 应用

拓扑排序的典型应用之一是**基于依赖关系的任务调度**。任务由顶点表示，如果任务 `x` 必须在任务 `y` 之前完成，那么就存在从 `x` 到 `y` 的边（例如，洗衣服时，洗衣机必须先完成才能把衣服放入烘干机）。然后，拓扑排序提供了一种执行任务的顺序。

另一个应用是**依赖关系解析**。每个顶点表示一个软件包，每条边表示软件包 `a` 对软件包 `b` 的依赖关系。然后拓扑排序提供了一种安装依赖关系的顺序，使得每个依赖关系的下一个软件包都在前面的软件包之前被安装。

## 参考资料

- [维基百科](https://en.wikipedia.org/wiki/Topological_sorting)
- [YouTube（Tushar Roy）](https://www.youtube.com/watch?v=ddTC4Zovtbc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)