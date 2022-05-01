'use strict';

const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

/**
 * Solution 3:
 *  361/361 test cases padded
 *  Runtime: 81 ms
 *  Memory Usage: 44.6 MB
 */
const removeDuplicates = function (array) {
    let length = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i - 1]) array[length++] = array[i];
    }
    return length;
}

const newLength = removeDuplicates(array);
console.log(array, newLength);