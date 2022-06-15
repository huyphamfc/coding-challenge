/*
    Purpose: build array from permutation
    Create on Jun 15, 2022
    Author: huyphamfc

    140/140 test cases passed
    Runtime: 113 ms
    Memory Usage: 46.1 MB
*/

'use strict'


const nums = [0, 2, 1, 5, 3, 4]
const buildArray = nums => {
    const newNums = [];
    for (let i = 0; i < nums.length; i++) newNums.push(nums[nums[i]]);
    return newNums;
}
console.log(buildArray(nums));