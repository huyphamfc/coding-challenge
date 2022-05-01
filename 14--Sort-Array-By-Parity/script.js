/**
 * Purpose: Sort Array By Parity
 * Create on May 1, 2022
 * Author: huyphamfc
 * 
 * 285/285 test cases passed
 * 
 * Solution 1:
 *  Runtime: 105 ms
 *  Memory Usage: 44.9 MB
 * 
 * Solution 2:
 *  Runtime: 110 ms
 *  Memory Usage: 44.5 MB
 */

'use strict';

// const array = [1];
// const array = [0, 1];
// const array = [0, 1, 3];
// const array = [3, 1, 2, 4];

const sortArrayByParity = () => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            let j = i + 1;
            while (j < array.length && array[j] % 2 !== 0) j++;
            if (j === array.length) return;
            array[i] += array[j];
            array[j] = array[i] - array[j];
            array[i] -= array[j];
        }
    }
}

const sortArrayByParity_2 = () => {
    let i = 0;
    let j = array.length - 1;
    while (i < j) {
        if (array[i] % 2 !== 0 && array[j] % 2 === 0) {
            array[i] += array[j];
            array[j] = array[i] - array[j];
            array[i] -= array[j];
            j--;
        }
        if (array[i] % 2 === 0) i++;
        if (array[j] % 2 !== 0) j--;
    }
}