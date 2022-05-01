# Remove Element

Given an integer `array` and an integer `value`, remove all occurrences of the `value` in the `array` in place. The relative order of the elements may be changed.

Return the length of the array after removing elements.

Example 1:

```
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
```

Example 2:

```
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
```

Hint:

We can keep 2 pointers `i` and `j`, where `i` is the slow-runner while `j` is the fast-runner.

When `array[j]` is equal to the given value, skip this element by incrementing `j`. As long as `array[j]` is different from the `value`, we copy `array[j]` to `array[i]` and increment both indexes at the same time. Repeat the process until `j` reaches the end of the array and the new length is `i`.

```
0   1   2   2   3   0   4   2   // value = 2
|   |     _____/       /
|   |    /   _________/
|   |   /   /
0   1   3   4
```

&copy; [LeetCode](https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3575/)

Happy Coding :))
