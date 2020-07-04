class Squares {
  private _squareOfSum = 0;
  private _sumOfSquares = 0;

  constructor(private squares: number) {}

  get squareOfSum(): number {
    if (this._squareOfSum !== 0) {
      return this._squareOfSum;
    }

    for (let i = 1; i <= this.squares; i++) {
      this._squareOfSum += i;
    }

    this._squareOfSum *= this._squareOfSum;
    return this._squareOfSum;
  }

  get sumOfSquares(): number {
    if (this._sumOfSquares !== 0) {
      return this._sumOfSquares;
    }

    for (let i = 1; i <= this.squares; i++) {
      this._sumOfSquares += i * i;
    }

    return this._sumOfSquares;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}

export default Squares;
