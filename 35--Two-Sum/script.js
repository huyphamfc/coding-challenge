/*
    Purpose: two sum
    Created on Jul 2, 2022
    Author: huyphamfc

    57/57 test cases passed
    Runtime: 74 ms
    Memory Usage: 42.5 MB
*/


'use strict'

const twoSum = (nums, target) => {
    const visitedNums = {};
    for (let i = 0; i < nums.length; i++) {
        const indexOfNeededNum = visitedNums[target - nums[i]];
        if (indexOfNeededNum >= 0) return [i, indexOfNeededNum];
        visitedNums[nums[i]] = i;
    }
}