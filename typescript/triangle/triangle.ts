export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  kind(): string {
    if (!this.isValid()) {
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
    return this.sides.length - new Set(this.sides).size + 1;
  }

  private isInequality(): boolean {
    const [a, b, c] = this.sides.sort((a, b) => a - b);
    return a + b > c;
  }

  private isValid(): boolean {
    return this.isInequality() && this.sides.every((side) => side > 0);
  }
}
