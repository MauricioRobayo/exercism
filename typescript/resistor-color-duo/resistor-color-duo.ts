type Color = keyof ResistorColor['colorMap']

export class ResistorColor {
  private colorMap = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  }
  
  constructor(private colors: [Color, Color]) {
  }
  
  value = (): number => {
    const [ first, second ] = this.colors
    return this.colorMap[first] * 10 + this.colorMap[second]
  }
}
