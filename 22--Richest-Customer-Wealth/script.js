/*
    Purpose: Richest Customer Wealth
    Create on May 27, 2022
    Author: huyphamfc

    Runtime: 110 ms
    Memory Usage: 42.3 MB
*/

'use strict'

const accounts = [[1, 5], [7, 3], [3, 5]];

const maximumWealth = accounts => (accounts.map(item => item.reduce((sum, value) => sum + value, 0)))
    .reduce((max, val) => val > max ? val : max);

console.log(maximumWealth(accounts));