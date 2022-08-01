/*
    Purpose: How many numbers are smaller than the current number
    Created on Aug 1, 2022
    Author: huyphamfc

    103/103 test cases passed
    Runtime: 115 ms
    Memory Usage: 44.6 MB
*/


'use strict'


const smallerNumbersThanCurrent = nums => {
    const mapping = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) count++;
        }
        mapping.push(count);
    }
    return mapping;
}