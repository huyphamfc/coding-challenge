/*
    Purpose: running sum of one-dimension array
    Create on May 26, 2022
    Author: huyphamfc

    Runtime: 94 ms
    Memory Usage: 42.5 MB
*/

'use strict'

const nums = [1, 2, 3, 4];
const runningSum = nums => {
    let previous = 0;
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr.push(previous + nums[i]);
        previous = arr[i];
    }
    return arr;
}
console.log(runningSum(nums));