const codonsToProteins = {
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
const codons = [...Object.keys(codonsToProteins), ...stopCodons]

type ProteinCodon = keyof typeof codonsToProteins
type StopCodon = typeof stopCodons[number];
type Codon = ProteinCodon | StopCodon
type Protein = typeof codonsToProteins[ProteinCodon]

class ProteinTranslation {
  static readonly CODON_LENGTH = 3;

  static proteins(rna: string): Protein[] {
    const proteinCodons = ProteinTranslation.getProteinCodons(rna);

    return proteinCodons.map(ProteinTranslation.translateCodonToProtein);
  }

  private static getProteinCodons(rna: string): ProteinCodon[] {
    const proteinCodons: ProteinCodon[] = [];

    for (let i = 0; i < rna.length; i += ProteinTranslation.CODON_LENGTH) {
      const codon = rna.substr(i, ProteinTranslation.CODON_LENGTH);

      if (!ProteinTranslation.isCodon(codon)) {
        throw new Error('That is an unexpected codon')
      }

      if (ProteinTranslation.isStop(codon)) {
        break
      }
        
      proteinCodons.push(codon);
    }

    return proteinCodons;
  }

  private static translateCodonToProtein(codon: ProteinCodon): Protein  {
    return codonsToProteins[codon];
  }

  private static isCodon(s: string): s is Codon {
    return codons.includes(s)
  }

  private static isStop(s: string): s is StopCodon {
    return stopCodons.includes(s as StopCodon)
  }
}

export default ProteinTranslation;
