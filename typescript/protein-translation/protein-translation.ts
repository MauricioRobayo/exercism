const codons = [
  "AUG",
  "UUU",
  "UUC",
  "UUA",
  "UUG",
  "UCU",
  "UCC",
  "UCA",
  "UCG",
  "UAU",
  "UAC",
  "UGU",
  "UGC",
  "UGG",
  "UAA",
  "UAG",
  "UGA",
] as const;
type Codon = typeof codons[number];

const stops = ["UAA", "UAG", "UGA"]
type Stop = typeof stops[number];

type Protein =
  | "Methionine"
  | "Phenylalanine"
  | "Leucine"
  | "Serine"
  | "Tyrosine"
  | "Cysteine"
  | "Tryptophan";

type ProteinCodon = Exclude<Codon, Stop>;

const codonsToProteins: Record<ProteinCodon, Protein> = {
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
};

class ProteinTranslation {
  static proteins(rna: string): Protein[] {
    const protein: Protein[] = [];

    const codons = ProteinTranslation.splitRna(rna);
    const proteinCodons = ProteinTranslation.trimCodons(codons);

    return proteinCodons.map((codon) => codonsToProteins[codon]);
  }

  private static splitRna(rna: string): Codon[] {
    const codonLength = 3;
    const codons: Codon[] = [];

    for (let i = 0; i < rna.length; i += codonLength) {
      const codon = rna.substr(i, codonLength);

      if (ProteinTranslation.isCodon(codon)) {
        codons.push(codon);
      }
    }

    return codons;
  }

  private static trimCodons(codons: Codon[]): ProteinCodon[] {
    const proteinCodons: ProteinCodon[] = []

    for (const codon of codons) {
      if (ProteinTranslation.isStop(codon)) {
        break
      }

      proteinCodons.push(codon)
    }

    return proteinCodons
  }

  private static isCodon(s: string): s is Codon {
    return codons.some((codon) => codon === s)
  }

  private static isStop(s: string): s is Stop {
    return stops.some((stop) => stop === s)
  }
}

export default ProteinTranslation;
