/**
 * Purpose: Remove Duplicates from Sorted Array
 * Create on May 1, 2022
 * Author: huyphamfc
 * 
 * 361/361 test cases passed
 *  Runtime: 81 ms
 *  Memory Usage: 44.6 MB
 */

'use strict';

// const array = [1, 1, 2];
// const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicates = () => {
    let length = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i - 1]) array[length++] = array[i];
    }
    return length;
}

console.log(removeDuplicates(), array);