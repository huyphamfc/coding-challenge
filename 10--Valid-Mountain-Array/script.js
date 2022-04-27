/**
 * Purpose: Is the array valid mountain array?
 * Create on Apr 27, 2022
 * Author: huyphamfc
 * 
 * 53/53 test cases passed
 * Solution 1:
 *  Runtime: 74 ms
 *  Memory Usage: 44.6 MB
 */

'use strict';

// const array = [0, 2, 3, 4, 5, 2, 1, 0];
// const array = [0, 2, 3, 3, 5, 2, 1, 0];
// const array = [0, 1, 2, 3];

const validMountainArray = function (array) {
    if (array[1] <= array[0]) return false;
    let flag = false;
    for (let i = 1; i < array.length - 1; i++) {
        if (array[i] === array[i - 1]) return false;
        if (array[i - 1] > array[i] && array[i] < array[i + 1]) return false;
        if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
            if (flag) {
                return false;
            } else {
                flag = true;
            }
        }
    }
    if (flag) {
        return true;
    } else {
        return false;
    }
}

const demo = validMountainArray(array);
console.log(demo);