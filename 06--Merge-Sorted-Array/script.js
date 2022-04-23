'use strict';

const array_1 = [1, 2, 3, 0, 0, 0];
const array_2 = [2, 5, 6];

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

const mergeArray = function (array_1, array_2) {
    if (array_1.length === 0 && array_2.length !== 0) {
        array_1 = array_2;
    }
    if (array_1.length !== 0 && array_2.length !== 0) {
        for (let i = 0; i < array_2.length; i++) {
            array_1.pop();
        }
        for (let i = 0; i < array_2.length; i++) {
            array_1.push(array_2[i]);
        }
        array_1 = quicksort(array_1, 0, array_1.length - 1);
    }
}

mergeArray(array_1, array_2);
console.log(array_1);