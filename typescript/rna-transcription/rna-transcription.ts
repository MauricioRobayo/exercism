type DNA = 'G' | 'C' | 'T' | 'A';
type RNA = 'C' | 'G' | 'A' | 'U';

class Transcriptor {
  toRna(dna: string): string {
    const complements: Record<DNA, RNA> = {
      G: 'C',
      C: 'G',
      T: 'A',
      A: 'U',
    }
    return [...dna]
      .map((e: DNA) => {
        if (complements[e] === undefined) {
          throw new Error('Invalid input DNA.')
        }
        return complements[e];
      })
      .join("");
  }
}

export default Transcriptor;
w