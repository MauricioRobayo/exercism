class Year {
  constructor(private value: number) {}

  isDivisibleBy(divisor: number): boolean {
    return this.value % divisor === 0;
  }
}

function isLeapYear(n: number): boolean {
  const year = new Year(n);
  return (
    (year.isDivisibleBy(4) && !year.isDivisibleBy(100)) ||
    year.isDivisibleBy(400)
  );
}

export default isLeapYear;
