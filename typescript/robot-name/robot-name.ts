function shuffle(arr: string[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function getAllNames(): string[] {
  const allNames: string[] = [];
  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    for (let j = "A".charCodeAt(0); j <= "Z".charCodeAt(0); j++) {
      for (let k = 0; k < 1000; k++) {
        allNames.push(
          `${String.fromCharCode(i)}${String.fromCharCode(j)}${String(
            k
          ).padStart(3, "0")}`
        );
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
