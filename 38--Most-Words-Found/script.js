/*
    Purpose: Maximum Number of Words Found in Sentences
    Created on July 31, 2022
    Author: huyphamfc

    90/90 test cases passed
    Runtime: 73 ms
    Memory Usage: 42.7 MB
*/


'use strict'


const mostWordsFound = sentences => {
    let max = 0;
    for (let i = 0; i < sentences.length; i++) {
        let words = 0;
        for (let j = 0; j < sentences[i].length; j++) {
            if (sentences[i][j] === ' ') words++;
        }
        if (words > max) max = words;
    }
    return max + 1;
}