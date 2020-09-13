class ComplexNumber {
  constructor(public readonly real: number, public readonly imag: number) {}

  add(complexNumber: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real + complexNumber.real, this.imag + complexNumber.imag);
  }

  sub(complexNumber: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real - complexNumber.real, this.imag - complexNumber.imag);
  }

  mul(complexNumber: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real * complexNumber.real - this.imag * complexNumber.imag,
      this.imag * complexNumber.real + this.real * complexNumber.imag
    );
  }

  div(complexNumber: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      (this.real * complexNumber.real + this.imag * complexNumber.imag) /
        (Math.pow(complexNumber.real, 2) + Math.pow(complexNumber.imag, 2)),
      (this.imag * complexNumber.real - this.real * complexNumber.imag) /
        (Math.pow(complexNumber.real, 2) + Math.pow(complexNumber.imag, 2))
    );
  }

  get abs(): number {
    return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imag, 2));
  }

  get conj(): ComplexNumber {
    return new ComplexNumber(this.real, this.imag === 0 ? 0 : -this.imag);
  }

  get exp(): ComplexNumber {
    return new ComplexNumber(
      Math.pow(Math.E, this.real) * Math.cos(this.imag), Math.sin(this.imag)
    );
  }
}

export default ComplexNumber;
