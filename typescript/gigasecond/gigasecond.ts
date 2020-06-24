class Gigasecond {
  constructor(private d: Date) {
  }
  date(): Date {
    const d2 = new Date(this.d)
    return new Date(d2.setSeconds(this.d.getSeconds() + 1000000000));
  }
}

export default Gigasecond