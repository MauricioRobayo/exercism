const factors = [
  { factor: 3, name: 'Pling' },
  { factor: 5, name: 'Plang' },
  { factor: 7, name: 'Plong' },
]

class Raindrops {
  convert = (n: number): string =>
    factors
      .map(({ factor, name }) => n % factor === 0 ? name : '')
      .join('') || String(n)
}

export default Raindrops