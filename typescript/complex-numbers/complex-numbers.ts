class ComplexNumber {
  constructor(private a: number, private b: number) {}

  add(number: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.a + number.a, this.b + number.b);
  }

  sub(number: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.a - number.a, (this.b - Math.sign(number.b) * number.b))
  }

  mul(number: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.a * number.a -
      this.b * number.b, this.b * number.a + this.a * number.b)
  }

  div(number: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      (this.a * number.a + this.b * number.b) /
        (Math.pow(number.a, 2) + Math.pow(number.b, 2)),
      (this.b * number.a - this.a * number.b) /
        (Math.pow(number.a, 2) + Math.pow(number.b, 2))
    )
  }

  get real(): number {
    return Math.abs(this.a);
  }

  get imag(): number {
    return this.b;
  }

  get abs(): number {
    return Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
  }

  get conj(): ComplexNumber {
    return new ComplexNumber(this.a, this.b === 0 ? 0 : -this.b);
  }

  get exp(): ComplexNumber {
    return new ComplexNumber(Math.pow(Math.E, this.a), Math.cos(this.b) * Math.sin(this.b))
  }
}

export default ComplexNumber;
