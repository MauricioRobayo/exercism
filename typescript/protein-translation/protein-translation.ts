const codonsToAminoAcid = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
} as const;
const stopCodons = ["UAA", "UAG", "UGA"] as const;

type Codon = keyof typeof codonsToAminoAcid;
type StopCodon = typeof stopCodons[number];
type AminoAcid = typeof codonsToAminoAcid[Codon];

class ProteinTranslation {
  static readonly CODON_LENGTH = 3;

  static proteins(rna: string): AminoAcid[] {
    const codons = ProteinTranslation.splitRna(rna);
    const protein: AminoAcid[] = [];

    for (const codon of codons) {
      if (ProteinTranslation.isStop(codon)) {
        break;
      }
      protein.push(ProteinTranslation.translateCodonToAminoAcid(codon));
    }

    return protein;
  }

  private static *splitRna(rna: string): Generator<Codon | StopCodon> {
    for (let i = 0; i < rna.length; i += ProteinTranslation.CODON_LENGTH) {
      const codon = rna.substr(i, ProteinTranslation.CODON_LENGTH);
      if (
        !ProteinTranslation.isCodon(codon) &&
        !ProteinTranslation.isStop(codon)
      ) {
        throw new Error("That is an unexpected codon");
      }

      yield codon;
    }
  }

  private static translateCodonToAminoAcid(codon: Codon): AminoAcid {
    return codonsToAminoAcid[codon];
  }

  private static isCodon(s: string): s is Codon {
    return Object.keys(codonsToAminoAcid).includes(s);
  }

  private static isStop(s: string): s is StopCodon {
    return stopCodons.includes(s as StopCodon);
  }
}

export default ProteinTranslation;
