const leapYears = function(year) {

    let divisbleBy4 = year % 4 == 0;
    let divisibleBy100 = year % 100 == 0;
    let divisibleBy400 = year % 400 == 0;

    if (divisbleBy4 && (!divisibleBy100 || divisibleBy400)) {
        return true;
    }
    else {
        return false;
    }

};

// npm test leapYears.spec.js

// Do not edit below this line
module.exports = leapYears;
