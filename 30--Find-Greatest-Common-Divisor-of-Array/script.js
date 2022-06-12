/*
    Purpose: find greatest common divisor of array
    Create on Jun 12, 2022
    Author: huyphamfc

    215/215 test cases passed
    Runtime: 122 ms
    Memory Usage: 42.5 MB
*/

'use strict'

const arr = [7, 5, 6, 8, 3];

const findGCD = arr => {
    let min, max;
    min = max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];;
    }
    for (let i = min; i > 1; i--) {
        if (min % i === 0 && max % i === 0) return i;
    }
    return 1;
}

console.log(findGCD(arr));