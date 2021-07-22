const TOTAL_SQUARES = 64;
export default class Grains {
  static square(square: number): number {
    if (square <= 0) {
      throw new Error("Min square is 1");
    }

    if (square > TOTAL_SQUARES) {
      throw new Error(`Max square is ${TOTAL_SQUARES}`);
    }

    if (square === 1) {
      return 1;
    }

    return Math.pow(2, square - 1);
  }

  static total(): number {
    return Math.pow(2, TOTAL_SQUARES);
  }
}
