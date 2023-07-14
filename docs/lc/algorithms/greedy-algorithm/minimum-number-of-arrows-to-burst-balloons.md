# 爆破气球的最少箭数

## 题目描述

给定一组气球的坐标 `points`，每个气球由一个二维数组表示，其中 `points[i] = [x, y]` 表示气球的水平坐标和垂直坐标。现在有一支箭，可以垂直射出。如果箭能够击中某个气球，那么该气球以及与其相邻的气球都会被引爆。求解击爆所有气球所需的最小箭数。

## 解题步骤

为了解决最小箭数的问题，我们可以使用贪心算法来解决。贪心算法的思路是优先选择能够引爆尽可能多的气球的箭。

我们按照以下步骤进行解题：

1. 将气球按照水平坐标的结束位置进行排序，即按照 `points[i][1]` 进行升序排序。这样做的目的是将相邻的气球放在一起，方便进行处理。
2. 初始化变量 `end` 为第一个气球的结束位置，初始化变量 `arrows` 为 1，表示需要至少一支箭。
3. 遍历排序后的气球列表，对于每个气球：
   - 如果当前气球的开始位置大于 `end`，则说明当前气球与之前的气球没有重叠，需要增加一支箭，更新 `end` 为当前气球的结束位置。
   - 否则，当前气球与之前的气球重叠，无需增加箭数，更新 `end` 为当前气球的结束位置。
4. 遍历结束后，`arrows` 就是所需的最小箭数。

以下是使用贪心算法解决最小箭数问题的算法框架：

```javascript
function findMinArrowShots(points) {
  if (points.length === 0) {
    return 0;
  }

  points.sort((a, b) => a[1] - b[1]);

  let end = points[0][1];
  let arrows = 1;

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > end) {
      arrows++;
      end = points[i][1];
    }
  }

  return arrows;
}
```
