import { profileEnd } from "console";

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
} as const
const stopCodons = ["UAA", "UAG", "UGA"] as const
const codons = Object.keys(codonsToAminoAcid)

type Codon = keyof typeof codonsToAminoAcid
type StopCodon = typeof stopCodons[number];
type AminoAcid = typeof codonsToAminoAcid[Codon]

class ProteinTranslation {
  static readonly CODON_LENGTH = 3;

  static proteins(rna: string): AminoAcid[] {
    const codons = ProteinTranslation.splitRna(rna);
    const proteinSequence = ProteinTranslation.getProteinSequence(codons)
    return proteinSequence.map(ProteinTranslation.translateCodonToAminoAcid)
  }

  private static splitRna(rna: string): (Codon | StopCodon)[] {
    const codons: (Codon | StopCodon)[] = [];

    for (let i = 0; i < rna.length; i += ProteinTranslation.CODON_LENGTH) {
      const codon = rna.substr(i, ProteinTranslation.CODON_LENGTH);

      if (!ProteinTranslation.isCodon(codon) && !ProteinTranslation.isStop(codon)) {
        throw new Error('That is an unexpected codon')
      }
      
      codons.push(codon);
    }

    return codons;
  }

  private static getProteinSequence(codons: (Codon | StopCodon)[]): Codon[] {
    const proteinSequence: Codon[] = []

    for (const codon of codons) {
      if (ProteinTranslation.isStop(codon)) {
        break
      }
      proteinSequence.push(codon)
    }

    return proteinSequence
  }

  private static translateCodonToAminoAcid(codon: Codon): AminoAcid  {
    return codonsToAminoAcid[codon];
  }

  private static isCodon(s: string): s is Codon {
    return Object.keys(codonsToAminoAcid).includes(s)
  }

  private static isStop(s: string): s is StopCodon {
    return stopCodons.includes(s as StopCodon)
  }
}

export default ProteinTranslation;
