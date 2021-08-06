class RomanNumerals {
  static roman(number: number): string {
    if (number >= 4) {
      return `${"I".repeat(5 - number)}V`;
    }
    return "I".repeat(number);
  }
}

export default RomanNumerals;
