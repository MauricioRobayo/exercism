export default class Luhn {
  static valid(string: string): boolean {
    const stringWithoutSpaces = string.replace(/\s/g, "");

    if (stringWithoutSpaces.length <= 1) {
      return false;
    }

    if (/[^\d]/.test(stringWithoutSpaces)) {
      return false;
    }

    let total = 0;

    for (let i = stringWithoutSpaces.length - 1; i >= 0; i--) {
      const digit = Number(stringWithoutSpaces[i]);

      if (i % 2 === 0) {
        total += digit;
      } else {
        const doubled = digit * 2;
        total += doubled > 9 ? doubled - 9 : doubled;
      }
    }

    return total % 10 === 0;
  }
}
