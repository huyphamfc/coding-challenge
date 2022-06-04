/*
    Purpose: number of steps to reduce a number to zero
    Create on Jun 4, 2022
    Author: huyphamfc

    204/204 test cases passed
    Runtime: 79 ms
    Memory Usage: 42.3 MB
*/

'use strict'

const num = 14;
const numberOfSteps = num => {
    let count = 0;
    while (num > 0) {
        count++;
        if (num % 2 === 0) {
            num *= 0.5;
            continue;
        }
        num -= 1;
    }
    return count;
}
console.log(numberOfSteps(num));