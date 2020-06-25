const GIGASECOND = 1_000_000_000

class Gigasecond {
  constructor(private d: Date) {
  }
  date(): Date {
    const d2 = new Date(this.d)
    const gigamilliseconds = GIGASECOND * 1000
    return new Date(d2.setTime(this.d.getTime() + gigamilliseconds))
  }
}

export default Gigasecond