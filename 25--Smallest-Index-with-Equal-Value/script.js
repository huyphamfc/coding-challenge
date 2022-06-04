/*
    Purpose: smallest index with equal value
    Create on Jun 4, 2022
    Author: huyphamfc

    663/663 test cases passed
    Runtime: 84 ms
    Memory Usage: 44.1 MB
*/

'use strict'

const nums = [7, 8, 3, 5, 2, 6, 3, 1, 1, 4, 5, 4, 8, 7, 2, 0, 9, 9, 0, 5, 7, 1, 6];
const smallestEqual = nums => {
    for (let i = 0; i < nums.length; i++)
        if (i % 10 === nums[i]) return i;
    return - 1;
}
console.log(smallestEqual(nums));