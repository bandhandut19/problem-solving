const isLeapYear = (year: number): boolean => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
  return false;
};

// Test the function
const year = 2024;
console.log(`${year} is a leap year: ${isLeapYear(year)}`);
