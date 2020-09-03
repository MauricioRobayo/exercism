class Luhn {
  static valid(number: string): boolean {
    
    const numberWithoutSpaces = number.replace(/ /g, '')
    
    if (!/^\d{2,}$/.test(numberWithoutSpaces)) {
      return false
    }
    
    let result = numberWithoutSpaces.length % 2 === 0 ? 0 : Number(numberWithoutSpaces[0])
    for (let i = numberWithoutSpaces.length - 2; i >= 0; i -= 2) {
      result += Number(numberWithoutSpaces[i + 1])
      const doubledNumber = Number(numberWithoutSpaces[i]) * 2
      result += doubledNumber > 9 ? doubledNumber - 9 : doubledNumber
    }
    
    return result % 10 === 0
  }
}

export default Luhn