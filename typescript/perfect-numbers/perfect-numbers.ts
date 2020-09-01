type Category = "perfect" | "abundant" | "deficient";

class PerfectNumbers {
  static classify(number: number): Category {
    if (number <= 0) {
      throw new Error("Classification is only possible for natural numbers.");
    }

    const factorsSum = PerfectNumbers.getFactorsSum(number);

    if (factorsSum - number > number) {
      return "abundant";
    }

    if (factorsSum - number < number) {
      return "deficient";
    }

    return "perfect";
  }

  private static getFactorsSum(number: number): number {
    let sum = 0;

    for (let i = 1; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        sum += i === number / i ? i : i + number / i;
      }
    }

    return sum;
  }
}

export default PerfectNumbers;
