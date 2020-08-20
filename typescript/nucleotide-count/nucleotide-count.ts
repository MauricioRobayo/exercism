type Nucleotide = "A" | "C" | "G" | "T";
type NucleotidesCount = Record<Nucleotide, number>;

class NucleotideCount {
  static nucleotideCounts(strand: string): NucleotidesCount {
    const nucleotidesCount: NucleotidesCount = {
      A: 0,
      C: 0,
      G: 0,
      T: 0,
    };

    for (const nucleotide of strand) {
      if (!NucleotideCount.isNucleotide(nucleotide)) {
        throw new Error("Invalid nucleotide in strand");
      }
      nucleotidesCount[nucleotide]++
    }

    return nucleotidesCount
  }

  static isNucleotide(nucleotide: string): nucleotide is Nucleotide {
    return Object.keys(this.nucleotideCounts).includes(nucleotide);
  }
}

export default NucleotideCount;