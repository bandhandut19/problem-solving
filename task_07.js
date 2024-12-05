var isLeapYear = function (year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    return false;
};
// Test the function
var year = 2024;
console.log("".concat(year, " is a leap year: ").concat(isLeapYear(year)));
