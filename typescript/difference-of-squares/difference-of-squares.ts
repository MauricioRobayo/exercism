class Squares {
  private _squareOfSum = 0;
  private _sumOfSquares = 0;

  constructor(private squares: number) {
  }

  get squareOfSum(): number {
    for (let i = 1; i <= this.squares; i++) {
      this._squareOfSum += i;
    }

    this._squareOfSum *= this._squareOfSum;
    return this._squareOfSum;
  }

  get sumOfSquares(): number {
    for (let i = 1; i <= this.squares; i++) {
      this._sumOfSquares += i * i;
    }

    return this._sumOfSquares;
  }

  get difference(): number {
    return this._squareOfSum - this._sumOfSquares;
  }
}

export default Squares;
