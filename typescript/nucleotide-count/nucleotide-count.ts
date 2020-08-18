type Nucleotide = 'A' | 'C' | 'G' | 'T'
type NucleotidesCount = Record<Nucleotide, number>;

class NucleotideCount {
  static nucleotideCounts(strand: string): NucleotidesCount {
    const nucleotidesCount: NucleotidesCount = {
      A: 0,
      C: 0,
      G: 0,
      T: 0,
    };

    if (/[^ACGT]/.test(strand)) {
      throw new Error("Invalid nucleotide in strand");
    }

    for (const nucleotide of strand) {
      nucleotidesCount[nucleotide as Nucleotide]++
    }

    return nucleotidesCount
  }
}

export default NucleotideCount;
