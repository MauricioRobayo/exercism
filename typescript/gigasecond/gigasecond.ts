const GIGASECOND = 1_000_000_000

class Gigasecond {
  constructor(private initialDate: Date) {}
  
  date(): Date {
    const gigamilliseconds = GIGASECOND * 1000
    return new Date(this.initialDate.getTime() + gigamilliseconds)
  }
}

export default Gigasecond