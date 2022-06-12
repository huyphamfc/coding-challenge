/*
    Purpose: find triangular sum of an array
    Create on Jun 12, 2022
    Author: huyphamfc

    300/300 test cases passed
    Runtime: 145 ms
    Memory Usage: 43.9 MB
*/

'use strict'

const arr = [1, 2, 3, 4, 5];

const triangularSum = arr => {
    while (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = (arr[i] + arr[i + 1]) % 10;
        }
        arr.pop();
    }
    return arr[0];
}

console.log(triangularSum(arr));