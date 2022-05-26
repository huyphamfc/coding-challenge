/*
    Purpose: concatenation of array
    Create on May 26, 2022
    Author: huyphamfc

    Runtime: 135 ms
    Memory Usage: 45 MB
*/

'use strict'

const nums = [1, 2, 1];
const getConcatenation = nums => nums.concat(nums);
console.log(getConcatenation(nums));