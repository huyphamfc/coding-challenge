'use strict';

const array = [1, 2, 3, 2, 2, 4, 5];

const value = 2;

/**
 * Solution 2:
 *  113/113 test cases passed
 *  Runtime: 77ms
 *  Memory Usage: 42.1MB
 */
const removeElement = function (array, value) {
    let newLength = 0;
    for (let i = 0, j = 0; i < array.length; i++) {
        if (array[i] !== value) {
            array[j] = array[i];
            j++;
            newLength++;
        }
    }
    return newLength;
}

const newLength = removeElement(array, value);
console.log(array, newLength);