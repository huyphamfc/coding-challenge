/*
Purpose: third maximum number
Create on May 22, 2022
Author: huyphamfc

32/32 test cases passed
    Runtime: 112 ms
    Memory Usage: 45 MB
*/

'use strict'

const arr = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6];

const thirdMax = function (arr) {
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
    let uniqueArr = [...new Set(arr)];
    uniqueArr = quicksort(uniqueArr, 0, uniqueArr.length - 1);
    if (uniqueArr.length < 3) return uniqueArr[uniqueArr.length - 1];
    return uniqueArr[uniqueArr.length - 3];
}

console.log(thirdMax(arr));
