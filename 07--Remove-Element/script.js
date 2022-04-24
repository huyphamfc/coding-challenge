'use strict';

const array = [1, 2, 3, 2, 2, 4, 5];

const value = 2;

/**
 * Solution 1:
 *  113/113 test cases passed
 *  Runtime: 86ms
 *  Memory Usage: 42.2MB
 */
const removeElement = function (array, value) {
    let newLength = array.length;
    for (let i = 0; i < newLength; i++) {
        if (array[i] === value) {
            array[i] += array[newLength - 1]
            array[newLength - 1] = array[i] - array[newLength - 1];
            array[i] = array[i] - array[newLength - 1];
            newLength--;
            i--;
        }
    }
    return newLength;
}

const newLength = removeElement(array, value);
console.log(array, newLength);