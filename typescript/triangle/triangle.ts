export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  kind(): string {
    if (!this.isTriangle()) {
      throw new Error("That's not a triangle!");
    }
    if (!this.isInequality()) {
        throw new Error("That's not a triangle!");
      }
    if (this.isEquilateral()) {
        return "equilateral";
    }
    if (this.isIsosceles()) {
        return "isosceles";
    }
    return "scalene";
  }

  isInequality(): boolean {
    return (
      this.sides[0] + this.sides[1] >= this.sides[2] &&
      this.sides[1] + this.sides[2] >= this.sides[0] &&
      this.sides[0] + this.sides[2] >= this.sides[1]
    );
  }

  isTriangle(): boolean {
    return this.sides[0] > 0 && this.sides[1] > 0 && this.sides[2] > 0;
  }

  isEquilateral(): boolean {
    return this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2];
  }

  isIsosceles(): boolean {
    return (
      this.sides[0] === this.sides[1] ||
      this.sides[1] === this.sides[2] ||
      this.sides[0] === this.sides[2]
    );
  }
}
