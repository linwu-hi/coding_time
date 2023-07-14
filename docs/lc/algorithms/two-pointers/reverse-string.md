# 反转字符串

## **问题描述**：

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 `char[]` 的形式给出。

你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

示例：

输入：["h","e","l","l","o"]

输出：["o","l","l","e","h"]

## **解题步骤**：

1. 设置两个指针，一个在开头，一个在末尾。开头的指针称为左指针，末尾的指针称为右指针。

2. 当左指针小于右指针时，交换两个指针指向的元素，然后左指针右移一位，右指针左移一位。

3. 重复步骤 2，直到左指针大于或等于右指针，此时所有元素已经反转，算法结束。

## **解题框架**：


```javascript
function reverseString(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        // swap s[left] and s[right]
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
}
```