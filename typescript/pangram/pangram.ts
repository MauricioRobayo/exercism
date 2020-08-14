const alphabet = "abcdefghijklmnopqrstuvwxyz";

class Pangram {
  constructor(private sentence: string) {}

  isPangram(): boolean {

    const regex = new RegExp(`[^${alphabet}]`, 'gi')
    const alphabetLetters = this.sentence.replace(regex, '');

    return new Set(alphabetLetters).size >= new Set(alphabet).size
  }
}

export default Pangram;
