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

    if (this.matchingSides === 0) {
      return "scalene";
    }

    throw new Error('Unknown kind of triangle!')
  }

  get matchingSides(): number {
    const uniqueSides = new Set(this.sides).size;
    const uniqueSidesToMatchingSides: Record<number, number> = {
      1: 3,
      2: 2,
      3: 0
    }
    return uniqueSidesToMatchingSides[uniqueSides];
  }

  private isInequality(): boolean {
    const [a, b, c] = this.sides.sort((a, b) => a - b);
    return a + b > c;
  }

  private isValid(): boolean {
    return this.isInequality() && this.sides.every((side) => side > 0);
  }
}
