export class GradeSchool {
  private readonly _roster: { [key: number]: string[] } = {};
  private readonly _studentsList: { [key: string]: number } = {};

  roster(): { [key: number]: string[] } {
    return JSON.parse(JSON.stringify(this._roster));
  }

  add(student: string, grade: number): void {
    this.deDupe(student);

    if (this._roster[grade] === undefined) {
      this._roster[grade] = [];
    }

    this._roster[grade].push(student);
    this._roster[grade].sort();
    this._studentsList[student] = grade;
  }

  grade(n: number): string[] {
    return [...(this._roster[n] ?? [])];
  }

  private deDupe(student: string): void {
    const grade = this._studentsList[student];
    if (grade !== undefined) {
      this._roster[grade] = this._roster[grade].filter((s) => s !== student);
    }
  }
}
