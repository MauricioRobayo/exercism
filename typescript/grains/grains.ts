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

    let result = BigInt(1);
    for (let i = 0; i < square - 1; i++) {
      result *= BigInt(2);
    }
    return Number(result);
  }

  static total(): number {
    return Grains.square(MAX_SQUARES) * 2;
  }
}
