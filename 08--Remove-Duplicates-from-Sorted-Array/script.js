'use strict';

const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

/**
 * Solution 2:
 *  361/361 test cases padded
 *  Runtime: 83ms
 *  Memory Usage: 45MB
 */
const removeDuplicates = function (array) {
    if (array.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[j] !== array[i]) {
            i++;
            array[i] = array[j];
        }
    }
    return i + 1;
}

const newLength = removeDuplicates(array);
console.log(array, newLength);