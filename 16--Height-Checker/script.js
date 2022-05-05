/**
 * Purpose: Height Checker
 * Create on May 5, 2022
 * Author: huyphamfc
 * 
 * 81/81 test cases passed
 *  Runtime: 75 ms
 *  Memory Usage: 42.2 MB
 */


'use strict'

const arr = [1, 1, 4, 2, 1, 3];

const heightChecker = function (arr) {
    const unoderedArr = [...arr];
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
    }
    quicksort(arr, 0, arr.length - 1);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== unoderedArr[i]) count++;
    }
    return count;
}

console.log(heightChecker(arr));