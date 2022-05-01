/**
 * Purpose: Move all Zeroes to the end of the array
 * Create on May 1, 2022
 * Author: huyphamfc
 * 
 * 74/74 test cases passed
 *  Runtime: 80 ms
 *  Memory Usage: 46.7 MB
 */

'use strict';

const array = [0, 1, 0, 3, 12];

const moveZeros = () => {
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) array[j++] = array[i];
    }
    for (j - 1; j < array.length; j++) {
        array[j] = 0;
    }
}

moveZeros();
console.log(array);