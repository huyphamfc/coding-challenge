/*
Purpose: find all numbers disappeared in an array
Create on May 19, 2022
Author: huyphamfc

33/33 test cases passed
Solution 1:
    Runtime: 5849 ms
    Memory Usage: 49.8 MB
Solution 2:
    Runtime: 7457 ms
    Memory Usage: 54.1 MB
*/

'use strict'

// const arr = [4, 3, 2, 7, 8, 2, 3, 1];
const arr = [1, 1];

const findDisappearedNumbers = function (arr) {
    const disappearedNumbers = [];
    for (let i = 1; i <= arr.length; i++) {
        let disappeared = true;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === i) {
                disappeared = false;
                break;
            }
        }
        if (disappeared) disappearedNumbers.push(i);
    }
    return disappearedNumbers;
}

const findDisappearedNumbers_2 = function (arr) {
    const disappearedNumbers = [];
    const uniqueArr = [...new Set(arr)];
    for (let i = 1; i <= arr.length; i++) {
        let disappeared = true;
        for (let j = 0; j < uniqueArr.length; j++) {
            if (uniqueArr[j] === i) {
                disappeared = false;
                break;
            }
        }
        if (disappeared) disappearedNumbers.push(i);
    }
    return disappearedNumbers;
}

// console.log(findDisappearedNumbers(arr));
console.log(findDisappearedNumbers_2(arr));