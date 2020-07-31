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

    for (const letter of strand) {
      if (!NucleotideCount.isNucleotid(letter)) {
        throw new Error("Invalid nucleotide in strand");
      }
      nucleotidesCount[letter]++
    }

    return nucleotidesCount
  }

  static isNucleotid(letter: string): letter is Nucleotide {
    return ["A", "C", "G", "T"].includes(letter);
  }
}

export default NucleotideCount;
