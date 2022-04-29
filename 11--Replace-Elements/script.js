/**
 * Purpose: Replace Elements with Greatest Element on Right Side
 * Create on Apr 29, 2022
 * Author: huyphamfc
 * 
 * 15/15 test cases passed
 * 
 * Solution 1:
 *  Runtime: 91 ms
 *  Memory Usage: 45.6 MB
 * 
 * Solution 2:
 *  Runtime: 65 ms
 *  Memory Usage: 45.1 MB
 */


'use strict';

const array = [17, 18, 5, 4, 6, 1];

const replaceElements = (array) => {
    if (array.length === 0) return;
    for (let i = 0; i < array.length - 1; i++) {
        let max = array[i + 1];
        for (let j = i + 2; j < array.length; j++) {
            if (array[j] > max) max = array[j];
        }
        array[i] = max;
    }
    array[array.length - 1] = -1;
}

const replaceElements_2 = (array) => {
    if (array.length === 0) return;
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
        for (let j = i + 2; j < array.length; j++) {
            if (array[j] > array[i]) array[i] = array[j];
        }
    }
    array[array.length - 1] = -1;
}

// replaceElements(array);
// replaceElements_2(array);
console.log(array);