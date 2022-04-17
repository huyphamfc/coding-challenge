# Max Consecutive Ones

Give a binary array `array`, return the maximum number of consecutive `1`'s in the array

Example 1:

```
Input: array = {1, 1, 0, 1, 1, 1}
Output: 3
Explanation: The first 2 digits or the last 3 digits are consecutive 1s. The maximum number of consecutive 1s is 3.
```

Example 2:

```
Input: array = {1, 0, 1, 1, 0, 1}
Output: 2
```

Hint:
You need to think about two things as far as any window is concerned. One is the starting point for the window. How do you detect that a new window of 1s has started? The next part is detecting the ending point for this window. How do you detect the ending point for an existing window? If you figure these two things out, you will be able to detect the windows of consecutive ones. All that remains afterward is to find the longest such window and return the size.

&copy; [LeetCode](https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/)
