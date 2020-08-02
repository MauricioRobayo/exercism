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
    return Boolean(this.itemValue(item) & this.score)
  }

  list(): Item[] {
    return items.reduce((itemsList, item) => {
      if (this.allergicTo(item)) {
        itemsList.push(item)
      }
      return itemsList
    }, new Array<Item>())
  }

  private itemValue(item: Item): number {
    return Math.pow(2, items.indexOf(item))
  }
}

export default Allergies;