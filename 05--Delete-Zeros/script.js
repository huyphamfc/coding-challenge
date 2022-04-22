/**
 * Author: huyphamfc
 * Purpose: delete zero values from an array
 * Create on Apr 22, 2022
 */

/**
 * TEST CASES:
 *  Case 1: [0, 0, 0, 0, 0, 0] - PASS
 *  Case 2: [1, 0, 0, 0, 0, 0] - PASS
 *  Case 3: [0, 0, 0, 0, 0, 2] - PASS
 *  Case 4: [0, 0, 3, 0, 0, 0] - PASS
 *  Case 5: [0, 4, 0, 5, 0, 0] - PASS
 *  Case 6: [1, 0, 2, 0, 0, 3] - PASS
 *  Case 7: [1, 2, 3, 4, 5, 6] - PASS
 */

let array = [];

const deleteZeros = function (array) {
    let count = 0;
    for (let i = 0, j = 0; i < array.length; i++) {
        if (array[i] === 0) {
            count++;
        }
        if (array[i] !== 0) {
            array[j] = array[i];
            j++;
        }
    }
    while (count > 0) {
        array.pop();
        count--;
    }
    return array;
}

array = deleteZeros(array);
console.log(array);