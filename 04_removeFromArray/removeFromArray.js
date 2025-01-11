const removeFromArray = function(array, ...params) {

    const result = [];

    array.forEach(element => {
        if (!params.includes(element)) {
            result.push(element);
        }
    });

    return result;

};

// npm test removeFromArray.spec.js

// Do not edit below this line
module.exports = removeFromArray;
