const sumAll = function(start, end) {

    // non negative numbers
    if (start < 0 || end < 0) {
        return "ERROR";
    }
    // non integer numbers
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }

    let sum = 0;

    if (start < end) {
        for (i = start; i <= end; i++) {
            sum += i;
        }
    }
    else {
        for (i = end; i <= start; i++) {
            sum += i;
        }
    }

    return sum;

};

// npm test sumAll.spec.js

// Do not edit below this line
module.exports = sumAll;
