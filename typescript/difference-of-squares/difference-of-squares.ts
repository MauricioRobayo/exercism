class Squares {
  public squareOfSum = 0;
  public sumOfSquares = 0;

  constructor(private squares: number) {
    this.squareOfSum = this.calculateSquareOfSum()
    this.sumOfSquares = this.calculateSumOfSquares()
  }

  calculateSquareOfSum(): number {
    let squareOfSum = 0
    for (let i = 1; i <= this.squares; i++) {
      squareOfSum += i;
    }

    return squareOfSum * squareOfSum;
  }

  calculateSumOfSquares(): number {
    let sumOfSquares = 0
    for (let i = 1; i <= this.squares; i++) {
      sumOfSquares += i * i;
    }

    return sumOfSquares;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}

export default Squares;
