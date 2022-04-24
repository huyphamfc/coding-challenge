'use strict';

const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

/**
 * Solution 1:
 *  361/361 test cases padded
 *  Runtime: 100ms
 *  Memory Usage: 44.4MB
 */
const removeDuplicates = function (array) {
    let newLength = 1;
    let temp = array[0];
    for (let i = 1, j = 1; i < array.length; i++) {
        if (array[i] !== temp) {
            temp = array[i];
            array[j] = array[i];
            j++;
            newLength++;
        }
    }
    return newLength;
}

const newLength = removeDuplicates(array);
console.log(array, newLength);