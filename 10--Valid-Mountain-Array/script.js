/**
 * Purpose: Is the array valid mountain array?
 * Create on Apr 27, 2022
 * Author: huyphamfc
 * 
 * 53/53 test cases passed
 * 
 * Solution 1:
 *  Runtime: 74 ms
 *  Memory Usage: 44.6 MB
 * 
 * Solution 2:
 *  Runtime: 76 ms
 *  Memory Usage: 44.3 MB
 */

'use strict';

// const array = [0, 2, 3, 4, 5, 2, 1, 0];
// const array = [0, 2, 3, 3, 5, 2, 1, 0];
// const array = [0, 1, 2, 3];
// const array = [1, 2];
// const array = [1];

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

const validMountainArray_2 = function (array) {
    if (array.length < 3) return false;
    if (array[0] >= array[1]) return false;
    if (array[array.length - 2] <= array[array.length - 1]) return false;
    for (let i = 1; i < array.length - 1; i++) {
        if (array[i] === array[i - 1]) return false;
        if (array[i] < array[i - 1] && array[i] < array[i + 1]) return false;
    }
    return true;
}

const demo = validMountainArray(array);
const demo_2 = validMountainArray_2(array);
console.log(demo);
console.log(demo_2);