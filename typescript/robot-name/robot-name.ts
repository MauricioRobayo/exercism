function shuffle(arr: string[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function getAllNames(): string[] {
  const allNames: string[] = [];
  const aCode = "A".charCodeAt(0);
  const zCode = "Z".charCodeAt(0);
  for (let i = aCode; i <= zCode; i++) {
    for (let j = aCode; j <= zCode; j++) {
      for (let k = 0; k < 1000; k++) {
        const firstLetter = String.fromCharCode(i);
        const secondLetter = String.fromCharCode(j);
        const number = String(k).padStart(3, "0");
        allNames.push(`${firstLetter}${secondLetter}${number}`);
      }
    }
  }
  shuffle(allNames);
  return allNames;
}

const allNames = getAllNames();
let currentNameIndex = 0;

export class Robot {
  private _name: string;

  constructor() {
    this._name = allNames[currentNameIndex++];
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = allNames[currentNameIndex++];
  }

  public static releaseNames(): void {
    currentNameIndex = 0;
  }
}
