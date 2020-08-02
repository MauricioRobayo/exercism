const items = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats',
] as const
type Item = typeof items[number]

class Allergies {
  constructor(private score: number) {}

  allergicTo(item: Item): boolean {
    const index = items.indexOf(item)
    const itemsIndexes = this.getItemsIndexes()

    return itemsIndexes.includes(index)
  }

  list(): Item[] {
    const itemsIndexes = this.getItemsIndexes()

    return itemsIndexes
      .map((itemIndex) => items[itemIndex])
      .filter((item) => item !== undefined)
  }

  private getItemsIndexes(): number[] {
    let currentScore = this.score
    const itemsIndexes: number[] = []
    while (currentScore > 0) {
      const itemIndex = Math.trunc(Math.log2(currentScore))
      const itemScore = Math.pow(2, itemIndex)
      currentScore -= itemScore
      itemsIndexes.unshift(itemIndex)
    }
    return itemsIndexes
  }
}

export default Allergies;
