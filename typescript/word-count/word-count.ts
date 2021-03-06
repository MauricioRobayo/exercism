type WordFrequency = Map<string, number>

class Words {
  count(phrase: string): WordFrequency {
    const wordsFrequency: WordFrequency = new Map()

    this.tokenizePhrase(phrase).forEach((word) => {
        const wordFreq = wordsFrequency.get(word)
        wordsFrequency.set(word, (wordFreq || 0) + 1)
      })
    
    return wordsFrequency
  }

  private tokenizePhrase(phrase: string): string[] {
    return phrase
      .trim()
      .split(/\s+/)
      .map((word) => word.toLowerCase())
  }
}

export default Words