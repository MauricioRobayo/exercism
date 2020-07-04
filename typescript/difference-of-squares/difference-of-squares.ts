class Squares {
  readonly squareOfSum = 0
  readonly sumOfSquares = 0
  readonly difference: number

  constructor(private squares: number) {
    for (let i = 1; i <= this.squares; i++) {
      this.squareOfSum += i
      this.sumOfSquares += i * i
    }
    this.squareOfSum *= this.squareOfSum
    this.difference = this.squareOfSum - this.sumOfSquares
  }

}

export default Squares
