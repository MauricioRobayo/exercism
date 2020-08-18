class Pangram {
  constructor(private sentence: string) {}

  isPangram(): boolean {
    const sentenceAlphabetCharacters = this.sentence.toLowerCase().replace(/[^a-z]/g, '');
    return new Set(sentenceAlphabetCharacters).size === 26
  }
}

export default Pangram;
