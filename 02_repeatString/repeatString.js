const repeatString = function(word, repeats) {

    if (repeats < 0) {
        return "ERROR";
    }

    let result = "";

    for (i = 0; i < repeats; i++) {
        result += word;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
