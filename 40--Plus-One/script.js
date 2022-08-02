/*
    Purpose: plus one
    Created on Aug 2, 2022
    Author: huyphamfc

    111/111 test cases passed
    Runtime: 123 ms
    Memory Usage: 41.9 MB
*/


'use strict'


const plusOne = digits => {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] <= 9) return digits;
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}