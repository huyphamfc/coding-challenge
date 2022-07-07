/*
    Purpose: kids with the greatest number of candies
    Created on Jul 7, 2022
    Author: huyphamfc

    103/103 test cases passed
    Runtime: 115 ms
    Memory Usage: 42.6 MB
*/

'use strict'

const candies = [4, 2, 1, 1, 2];
const extraCandies = 1;

const kidsWithCandies = (candies, extraCandies) => {
    let max = candies.reduce((result, value) => value > result ? value : result, candies[0]);
    return candies.map(value => value + extraCandies >= max);
}

console.log(kidsWithCandies(candies, extraCandies));