class Matrix {
  private matrix: number[][];

  constructor(matrix: string) {
    this.matrix = matrix
      .split("\n")
      .map((row) => row.split(" ").map((e) => Number(e)));
  }

  get rows(): number[][] {
    return this.matrix;
  }

  get columns(): number[][] {
    const columns: number[][] = Array.from(
      { length: this.matrix[0].length },
      () => []
    );

    for (let row = 0; row < this.matrix.length; row++) {
      for (let col = 0; col < this.matrix[row].length; col++) {
        columns[col][row] = this.matrix[row][col];
      }
    }

    return columns;
  }
}

export default Matrix;
