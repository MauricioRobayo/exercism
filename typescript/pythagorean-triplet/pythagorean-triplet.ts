export default class Triplet {
  constructor(private a: number, private b: number, private c: number) {}

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    return this.a ** 2 + this.b ** 2 === this.c ** 2;
  }

  static where({
    minFactor = 1,
    maxFactor,
    sum,
  }: {
    minFactor?: number;
    maxFactor: number;
    sum?: number;
  }): Triplet[] {
    const triplets: Triplet[] = [];
    for (let a = minFactor; a <= maxFactor - 2; a++) {
      for (let b = a + 1; b <= maxFactor - 1; b++) {
        const c = Math.sqrt(a ** 2 + b ** 2);
        const isPythagoreanTriplet = Math.round(c) === c;
        if (isPythagoreanTriplet) {
          if (sum) {
            if (a + b + c === sum) {
              triplets.push(new Triplet(a, b, c));
            }
          } else {
            triplets.push(new Triplet(a, b, c));
          }
        }
      }
    }

    return triplets;
  }
}
