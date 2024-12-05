var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sumEvenNumbers = function (arr) {
    return arr.reduce(function (sum, current) {
        if (current % 2 === 0) {
            return sum + current;
        }
        return sum;
    }, 0);
};
var result_06 = sumEvenNumbers(numbers);
console.log(result_06);
