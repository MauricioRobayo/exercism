type DNA = "G" | "C" | "T" | "A";
type RNA = "C" | "G" | "A" | "U";

class Transcriptor {
  readonly complements: Record<DNA, RNA> = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  toRna(dna: string): string {
    let rna = '';

    for (const nucleotide of dna){
      if (!this.isDnaNucleotide(nucleotide)) {
        throw new Error("Invalid input DNA.");
      }
      rna += this.complements[nucleotide];
    }

    return rna;
  }

  isDnaNucleotide(nucleotide: DNA | string): nucleotide is DNA {
    return nucleotide in this.complements;
  }
}

export default Transcriptor;
