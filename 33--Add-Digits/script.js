/*
Purpose: add digits
Create on June 25, 2022
Author: huyphamfc

1101/1101 test cases passed
Runtime: 76 ms
Memory Usage: 43.8 MB
*/


'use strict'


const num = 0;

const addDigits = num => {
    while (num >= 10) {
        num = Math.floor(num / 10) + num % 10;
    }
    return num;
}

console.log(addDigits(num));