# Valid Mountain Array

Given an array of integers `array`, return `true` if and only if it is a valid mountain array.

Recall that `array` is a mountain array if and only if:

- `array.length >= 3`
- There exists some `i` with `0 < i < array.length - 1` such that:
  - `array[0] < array[1] < ... < array[i - 1] < array[i]`
  - `array[i] > array[i + 1] > ... > array[array.length - 1]`

![](img/description.png)

Example 1:

```
Input: array = [2,1]
Output: false
```

Example 2:

```
Input: array = [3,5,5]
Output: false
```

Example 3:

```
Input: array = [0,3,2,1]
Output: true
```

**Intuition**

If we walk along the mountain from left to right, we have to move strictly up, then strictly down. If we move down and then move up, that is NOT a mountain.

```
   b
  / \     => This is a mountain
a     c

a     c
  \ /     => The sign to detect this is NOT a mountain
   b
```

&copy; [LeetCode](https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/)

Happy Coding :))
