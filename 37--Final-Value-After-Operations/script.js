/*
    Purpose: final value of variable after performing operations
    Create on Jul 30, 2022
    Author: huyphamfc

    259/259 test cases passed
    Runtime: 85 ms
    Memory Usage: 42.6 MB
*/

'use strict'


const finalValueAfterOperations = operations =>
    operations.reduce((result, value) => {
        if (value === '--X' || value === 'X--')
            return result - 1;
        return result + 1;
    }, 0);