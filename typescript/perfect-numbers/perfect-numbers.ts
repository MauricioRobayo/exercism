type Category = "perfect" | "abundant" | "deficient";

class PerfectNumbers {
  static classify(n: number): Category {
    if (n <= 0) {
      throw new Error("Classification is only possible for natural numbers.");
    }

    const factorsSum = PerfectNumbers.getFactorsSum(n);

    if (factorsSum - n > n) {
      return "abundant";
    }

    if (factorsSum - n < n) {
      return "deficient";
    }

    return "perfect";
  }

  private static getFactorsSum(n: number): number {
    let sum = 0;

    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        sum += i === n / i ? i : i + n / i;
      }
    }

    return sum;
  }
}

export default PerfectNumbers;
