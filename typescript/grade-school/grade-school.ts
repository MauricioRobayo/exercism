export class GradeSchool {
  private _roster: string[][] = [];
  private _students: { [key: string]: number } = {};

  roster(): { [key: number]: string[] } {
    const result: { [key: number]: string[] } = {};

    for (let i = 0; i < this._roster.length; i++) {
      if (this._roster[i]) {
        result[i] = [...this._roster[i]] || [];
      }
    }

    return result;
  }

  add(student: string, grade: number): void {
    const currentGrade = this._students[student];
    if (currentGrade !== undefined) {
      const filteredStudents = this._roster[currentGrade].filter(
        (s) => s !== student
      );
      this._roster[currentGrade] = filteredStudents;
    }

    if (!this._roster[grade]) {
      this._roster[grade] = [];
    }
    this._roster[grade].push(student);
    this._roster[grade].sort();
    this._students[student] = grade;
  }

  grade(n: number): string[] {
    return [...(this._roster[n] || [])];
  }
}
