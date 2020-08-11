const factors: string[] = [];
factors[3] = 'Pling';
factors[5] = 'Plang';
factors[7] = 'Plong';

class Raindrops {
  convert(n: number): string {
      return factors
        .map((name, i) => n % i === 0 ? name : '')
        .join('') || String(n)
    }
}

export default Raindrops