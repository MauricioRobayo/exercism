const romanNumbers = [
  {
    1: "I",
    5: "V",
    10: "X",
  },
  {
    1: "X",
    5: "L",
    10: "C",
  },
  {
    1: "C",
    5: "D",
    10: "M",
  },
  {
    1: "M",
  },
];

class RomanNumerals {
  static roman(number: number): string {
    const numberString = String(number);
    let result = "";

    for (let i = 0; i < numberString.length; i++) {
      const unit = numberString[i];
      const roman = romanNumbers[numberString.length - i - 1];

      if (Number(unit) >= 9) {
        result += `${roman[1].repeat(10 - Number(unit))}${roman[10]}`;
      } else if (Number(unit) > 5) {
        result += `${roman[5]}${roman[1].repeat(Number(unit) - 5)}`;
      } else if (Number(unit) >= 4) {
        result += `${roman[1].repeat(5 - Number(unit))}${roman[5]}`;
      } else {
        result += roman[1].repeat(Number(unit));
      }
    }

    return result;
  }
}

export default RomanNumerals;
