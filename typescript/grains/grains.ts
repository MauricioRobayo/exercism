const MIN_SQUARES = 1;
const MAX_SQUARES = 64;
export default class Grains {
  static square(square: number): number {
    if (square < MIN_SQUARES) {
      throw new Error(`Min square is ${MIN_SQUARES}`);
    }

    if (square > MAX_SQUARES) {
      throw new Error(`Max square is ${MAX_SQUARES}`);
    }

    return Math.pow(2, square - 1);
  }

  static total(): number {
    return Math.pow(2, MAX_SQUARES);
  }
}
