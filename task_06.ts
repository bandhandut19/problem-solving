const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvenNumbers = (arr: number[]): number => {
  return arr.reduce((sum, current) => {
    if (current % 2 === 0) {
      return sum + current;
    }
    return sum;
  }, 0);
};

const result_06 = sumEvenNumbers(numbers);
console.log(result_06);
