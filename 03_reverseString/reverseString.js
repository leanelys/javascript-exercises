const reverseString = function(word) {

    let result = "";

    for (i = word.length - 1; i >= 0; i--) {
        result += word[i];
    }

    return result;
};

// npm test reverseString.spec.js

// Do not edit below this line
module.exports = reverseString;
