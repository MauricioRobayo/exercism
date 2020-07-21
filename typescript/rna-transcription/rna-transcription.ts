type DNA = "G" | "C" | "T" | "A";
type RNA = "C" | "G" | "A" | "U";

class Transcriptor {
  toRna(dna: string): string {
    const complements: Record<DNA, RNA> = {
      G: "C",
      C: "G",
      T: "A",
      A: "U",
    };
    let rna = '';

    for (const dnaStrand of dna){
      if (!(dnaStrand in complements)) {
        throw new Error("Invalid input DNA.");
      }
      rna += complements[<DNA>dnaStrand];
    }

    return rna;
  }
}

export default Transcriptor;
