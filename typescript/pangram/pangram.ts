class Pangram {
  constructor(private sentence: string) {}

  isPangram(): boolean {
    const letters = "abcdefghijklmnopqrstuwxyz";

    return [...letters].every((letter) =>
      this.sentence.toLowerCase().includes(letter)
    );
  }
}

export default Pangram;
