export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  kind(): string {
    if (!this.isTriangle()) {
      throw new Error("That's not a triangle!");
    }

    if (this.matchingSides === 3) {
      return "equilateral";
    }

    if (this.matchingSides === 2) {
      return "isosceles";
    }

    return "scalene";
  }

  get matchingSides(): number {
    if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) {
      return 3;
    } 

    if (
      this.sides[0] === this.sides[1] ||
      this.sides[1] === this.sides[2] ||
      this.sides[0] === this.sides[2]
    ) {
      return 2;
    }

    return 0;
  }

  private isInequality(): boolean {
    return (
      this.sides[0] + this.sides[1] >= this.sides[2] &&
      this.sides[1] + this.sides[2] >= this.sides[0] &&
      this.sides[0] + this.sides[2] >= this.sides[1]
    );
  }

  private isTriangle(): boolean {
    return (
      this.isInequality() &&
      this.sides[0] > 0 &&
      this.sides[1] > 0 &&
      this.sides[2] > 0
    );
  }
}
