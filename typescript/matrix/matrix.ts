type Matrix2D = number[][];

class Matrix {
  private matrix: Matrix2D;

  constructor(matrix: string) {
    this.matrix = matrix
      .split("\n")
      .map((row) => row.split(" ")
      .map(Number));
  }

  get rows(): Matrix2D {
    return this.matrix;
  }

  get columns(): Matrix2D {
    return this.matrix[0]
      .map((_, i) => this.matrix
      .map((row) => row[i]));
  }
}

export default Matrix;
