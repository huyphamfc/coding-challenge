/*
    Purpose: Three Divisors
    Create on Jun 27, 2022
    Author: huyphamfc

    228/228 test cases passed
    Runtime: 59 ms
    Memory Usage: 42,3 MB
*/



'use strict'


const isThree = num => {
    let range = Math.floor(num / 2);
    let count = 2;
    for (let i = 2; i <= range; i++)
        if (num % i === 0) count++;
    return count === 3;
}