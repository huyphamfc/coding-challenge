// let array = [1, 0, 2, 3, 0, 4, 5, 0];
// let array = [0, 0, 0, 0, 0, 0, 0];
// let array = [1, 2, 3];

console.log(array);

const duplicateZeros = function (array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === 0) {
            for (let j = array.length - 1; j > i + 1; j--) {
                array[j] = array[j - 1];
            }
            array[++i] = 0;
        }
    }
    return array;
}

array = duplicateZeros(array);
console.log(array);