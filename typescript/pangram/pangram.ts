const alphabet = "abcdefghijklmnopqrstuvwxyz";

class Pangram {
  constructor(private sentence: string) {}

  isPangram(): boolean {
    for (const letter of alphabet) {
      if (!this.sentence.toLowerCase().includes(letter)) {
        return false
      }
    }
    return true
  }
}

export default Pangram;
