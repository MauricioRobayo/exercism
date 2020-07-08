class Squares {
  constructor(private squares: number) {}

  get squareOfSum(): number {
    const total = (this.squares * (this.squares + 1)) / 2
    return total * total;
  }

  get sumOfSquares(): number {
    return this.squares * (this.squares + 1) * (2 * this.squares + 1) / 6;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}

export default Squares;