export default class Luhn {
  static valid(string: string): boolean {
    const stringWithoutSpaces = string.replace(/\s/g, "");
    if (stringWithoutSpaces.length <= 1) {
      return false;
    }

    let total = 0;

    for (const [index, digit] of Object.entries(stringWithoutSpaces)) {
      if (Number(index) % 2 === 0) {
        total += Number(digit);
      } else {
        const doubled = Number(digit) * 2;
        total += doubled > 9 ? doubled - 9 : doubled;
      }
    }

    return total % 10 === 0;
  }
}
