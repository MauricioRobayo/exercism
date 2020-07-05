type wordFrequency = Map<string, number>

class Words {
  count(phrase: string): wordFrequency {
    const wordsFrequency: wordFrequency = new Map()
    phrase
      .trim()
      .split(/\s+/)
      .forEach((word) => {
        const normalizedWord = word.toLowerCase()
        const wordFreq = wordsFrequency.get(normalizedWord)
        wordsFrequency.set(normalizedWord, wordFreq ? wordFreq + 1 : 1)
      })
    return wordsFrequency
  }
}

export default Words