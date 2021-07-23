class Isogram {
  static isIsogram(string: string): boolean {
    const charactersToIgnore = new Set(["-", " "]);
    const seenCharacters = new Set<string>();

    for (const character of string.toLowerCase()) {
      if (charactersToIgnore.has(character)) {
        continue;
      }

      if (seenCharacters.has(character)) {
        return false;
      } else {
        seenCharacters.add(character);
      }
    }

    return true;
  }
}

export default Isogram;
