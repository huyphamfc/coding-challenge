/**
 * Purpose: check if N and its double exist
 * Create on Apr 26, 2022
 * Auhtor: huyphamfc
 * 
 * 107/107 test cases passed
 * Runtime: 95ms
 * Memory Usage: 41.6MB
 */

'use strict';

const array = [7, 1, 14, 11];

const checkIfExist = function (array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === 2 * array[j] || array[i] === 0.5 * array[j]) return true;
        }
    }
    return false;
}

console.log(checkIfExist(array));