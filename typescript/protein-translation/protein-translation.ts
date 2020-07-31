type Codon =
  | "AUG"
  | "UUU"
  | "UUC"
  | "UUA"
  | "UUG"
  | "UCU"
  | "UCC"
  | "UCA"
  | "UCG"
  | "UAU"
  | "UAC"
  | "UGU"
  | "UGC"
  | "UGG"
  | "UAA"
  | "UAG"
  | "UGA";

type AminoAcid =
  | "Methionine"
  | "Phenylalanine"
  | "Leucine"
  | "Serine"
  | "Tyrosine"
  | "Cysteine"
  | "Tryptophan";

type Stop = "UAA" | "UAG" | "UGA";

type AminoAcidCodon = Exclude<Codon, Stop>;

const codonsToAminoAcids: Record<AminoAcidCodon, AminoAcid> = {
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
  static proteins(rna: string): AminoAcid[] {
    const protein: AminoAcid[] = [];

    const codons = ProteinTranslation.splitRnaIntoCodons(rna);
    return codons.map((codon) => codonsToAminoAcids[codon]);
  }

  private static splitRnaIntoCodons(rna: string): AminoAcidCodon[] {
    const codonLength = 3;
    const codons: AminoAcidCodon[] = [];
    for (let i = 0; i < rna.length; i += codonLength) {
      const codon = rna.substr(i, codonLength);
      if (!this.isAminoAcidCodon(codon)) {
        break
      }
      codons.push(codon);
    }
    return codons;
  }

  private static isAminoAcidCodon(codon: string): codon is AminoAcidCodon {
    return codon in codonsToAminoAcids;
  }
}

export default ProteinTranslation;
