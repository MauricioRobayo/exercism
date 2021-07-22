function SumOfMultiples(multiples: number[]): { to: (upTo: number) => number } {
  function to(upTo: number): number {
    let sum = 0;

    for (let i = 1; i < upTo; i++) {
      const isMultiple = multiples.some((multiple) => i % multiple === 0);
      if (isMultiple) {
        sum += i;
      }
    }

    return sum;
  }

  return { to };
}

export default SumOfMultiples;
