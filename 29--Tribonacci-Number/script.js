/*
    Purpose: Tribonacci Number
    Create on Jun 5, 2022
    Author: huyphamfc

    39/39 test cases passed
    Runtime: 75 ms
    Memory Usage: 42.1 MB
*/

'use strict'

const n = 25;
const tribonacci = n => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;
    let [a, b, c] = [0, 1, 1];
    let d;
    let count = 3;
    while (count <= n) {
        d = a + b + c;
        a = b;
        b = c;
        c = d;
        count++;
    }
    return d;
}
console.log(tribonacci(n));