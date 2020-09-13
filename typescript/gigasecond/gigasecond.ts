const GIGASECOND = 1_000_000_000

class Gigasecond {
  constructor(private initialDate: Date) {}

  date(): Date {
    const milliseconds = GIGASECOND * 1000
    return new Date(this.initialDate.getTime() + milliseconds)
  }
}

export default Gigasecond