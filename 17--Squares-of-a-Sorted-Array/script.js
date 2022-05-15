/**
 * Puprose: squares of a Sorted Array
 * Create on May 15, 2022
 * Author: huyphamfc
 * 
 * 137/137 test cases passed
 *  Runtime: 176 ms
 *  Memory Usage: 48 MB
 */

'use strict'

const arr = [-4, -1, 0, 3, 10];

const sortedSquares = function (arr) {
    for (let i = 0; i < arr.length; i++) arr[i] *= arr[i];
    const quicksort = function (array, left, right) {
        let i = left;
        let j = right;
        const center = array[Math.trunc((left + right) / 2)];
        do {
            while (array[i] < center) {
                i++;
            }
            while (array[j] > center) {
                j--;
            }
            if (i <= j) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                i++;
                j--;
            }
        } while (i < j);
        if (left < j) {
            quicksort(array, left, j);
        }
        if (right > i) {
            quicksort(array, i, right);
        }
        return array;
    }
    arr = quicksort(arr, 0, arr.length - 1);
    return arr;
}

const newArr = sortedSquares(arr);
console.log(newArr);