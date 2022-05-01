# Sort Array By Parity

Given an integer array, move all the even integers at the beginning of the array followed by all the odd integers.

Example 1:

```
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
```

Example 2:

```
Input: nums = [0]
Output: [0]
```

Hint:

We'll maintain 2 pointers `i` and `j`. The loop invariant is everything below `i` has parity `0` (`array[k] % 2 === 0` when `k < i`), and everything above `j` has parity `1`.

Then, there are 4 cases for `(array[i] % 2, array[j] % 2)`:

- if it is `(0,1)`, then everything is correct: `i++` and `j--`.

- if it is `(1,0)`, we swap them so they are correct, then continue.

- if it is `(0,0)`, only the `i` place is correct, so we `i++` and continue.

- if it is `(1,1)`, only the `j` place is correct, so we `j--` and continue

Throughout all 4 cases, the loop invariant is maintained, and `j-i` is getting smaller. So eventually we will be done with the array sorted as desired.

&copy; [LeetCode](https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3260/)

Happy Coding :))
