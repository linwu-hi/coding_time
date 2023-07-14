# 移除元素

## **问题描述**：

给你一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

示例：

给定 nums = [3,2,2,3], val = 3,

函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

## **解题步骤**：

1. 设置两个指针，一个快指针，一个慢指针。快指针用于遍历数组，慢指针用于标记非目标元素的最后一个位置。

2. 当快指针遍历数组时，比较快指针指向的元素和目标值，如果不相等，说明这个元素需要保留，将慢指针后移一位，并将快指针指向的元素值赋给慢指针。

3. 当快指针遍历完整个数组后，慢指针的位置（加1）就是数组新的长度。

## **解题框架**：


```javascript
function removeElement(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}
```
