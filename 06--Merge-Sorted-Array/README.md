# Merge Sorted Array

You are given two integer arrays `array_1` and `array_2`, sorted in non-decreasing order.

Merge `array_1` and `array_2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead, be stored inside the array `array_1`. To accommodate this, `array_1` needs to remove the last number of elements that are equal to the number of elements of `array_2`.

Example 1:

```
Input: array_1 = [1,2,3,0,0,0], array_2 = [2,5,6]
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6].
```

Example 2:

```
Input: array_1 = [1], array_2 = []
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```

Example 3:

```
Input: array_1 = [0], array_2 = [1]
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note: There are no elements in array_1. The 0 is only there to ensure the merge result can fit in array_1.
```

&copy; [LeetCode](https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3253/)

Happy Coding :))
