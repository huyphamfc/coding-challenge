/*
    Purpose: Fibonacci Numner
    Create on Jun 5, 2022
    Author: huyphamfc

    31/31 test cases passed
    Runtime: 76 ms
    Memory Usage: 41.7 MB
*/


'use strict'

const n = 5;
const fib = n => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let i = 0;
    let j = 1;
    let k;
    let count = 2;
    while (count <= n) {
        k = i + j;
        i = j;
        j = k;
        count++;
    }
    return k;
}
console.log(fib(n));