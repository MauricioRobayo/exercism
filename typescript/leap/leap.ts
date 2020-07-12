interface Year {
  isDivisibleBy: (divisor: number) => boolean;
}

function createYear(value: number): Year {
  return {
    isDivisibleBy(divisor: number): boolean {
      return value % divisor === 0;
    },
  };
}

function isLeapYear(n: number): boolean {
  const year = createYear(n);
  return (
    (year.isDivisibleBy(4) && !year.isDivisibleBy(100)) ||
    year.isDivisibleBy(400)
  );
}

export default isLeapYear;
