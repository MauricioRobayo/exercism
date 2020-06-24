export class ResistorColor {

  private colorMap: Record<string, string> = {
    black: "0",
    brown: "1",
    red: "2",
    orange: "3",
    yellow: "4",
    green: "5",
    blue: "6",
    violet: "7",
    grey: "8",
    white: "9",
  }

  constructor(private colors: string[]) {
    if (this.colors.length < 2) {
      throw new Error("At least two colors need to be present")
    }
  }
  value = (): number => parseInt(this.colors.slice(0, 2).map(color => this.colorMap[color]).join(''))
}
