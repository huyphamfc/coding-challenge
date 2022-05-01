/**
 * Purpose: Remove Element
 * Create on May 1, 2022
 * Author: huyphamfc
 * 
 * 113/113 test cases passed
 *  Runtime: 109 ms
 *  Memory Usage: 42.2 MB
 */

'use strict';

const array = [3, 2, 2, 3];
const value = 3;

const removeElement = (value) => {
    let i = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[j] !== value) array[i++] = array[j];
    }
    return i;
}

const i = removeElement(value)
console.log(array, i);