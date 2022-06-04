/*
    Purpose: subtract the product and sum of digits of an integer
    Create on Jun 4, 2022
    Author: huyphamfc

    123/123 test cases passed
    Runtime: 106 ms
    Memory Usage: 42.1 MB
*/

'use strict'

const num = 234;
const subtractProductAndSum = num => {
    let product = 1;
    let sum = 0;
    while (num > 0) {
        product *= num % 10;
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return product - sum;
}
console.log(subtractProductAndSum(num));