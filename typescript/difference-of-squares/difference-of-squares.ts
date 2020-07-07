class Squares {
  private _squareOfSum = 0
  private _sumOfSquares = 0

  constructor(private squares: number) {}

  get squareOfSum(): number {
    this._squareOfSum = 0
    for (let i = 1; i <= this.squares; i++) {
      this._squareOfSum += i;
    }

    return this._squareOfSum * this._squareOfSum;
  }

  get sumOfSquares(): number {
    this._sumOfSquares = 0
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
