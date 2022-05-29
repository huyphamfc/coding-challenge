/*
    Purpose: shuffle array
    Create on May 29, 2022
    Author: huyphamfc

    Runtime: 89 ms
    Memory Usage: 44.5 MB
*/

'use strict'

const nums = [2, 5, 1, 3, 4, 7];

const shuffle = nums => {
    const shuffleArray = [];
    for (let i = 0, j = nums.length * 0.5, k = 0; k < nums.length; k++) {
        if (k % 2 === 0) shuffleArray[k] = nums[i++];
        else shuffleArray[k] = nums[j++];
    }
    return shuffleArray;
}

console.log(shuffle(nums));