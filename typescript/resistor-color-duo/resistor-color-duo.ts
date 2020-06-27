type Color =
  | "black"
  | "brown"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "violet"
  | "grey"
  | "white"


export class ResistorColor {

  private colorMap: Record<Color, number> = {
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
  
  constructor(private colors: Color[]) {
    if (this.colors.length < 2) {
      throw new Error("At least two colors need to be present")
    }
  }
  
  value = (): number => {
    const [ first, second ] = this.colors
    return this.colorMap[first] * 10 + this.colorMap[second]
  }
}
