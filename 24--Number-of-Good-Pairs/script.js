/*
    Purpose: number of good pairs
    Create on May 29, 2022
    Author: huyphamfc

    Runtime: 86 ms
    Memory Usage: 41.8 MB
*/

'use strict'

const nums = [1, 2, 3, 1, 1, 3];

const numIdenticalPairs = nums => {
    let pairs = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++)
            if (nums[i] === nums[j]) pairs++;
    }
    return pairs;
}

console.log(numIdenticalPairs(nums));