export class GradeSchool {
  private readonly _roster: { [key: number]: string[] } = {};

  roster(): { [key: number]: string[] } {
    return JSON.parse(JSON.stringify(this._roster));
  }

  add(student: string, grade: number): void {
    const previousGrade = this.findStudentGrade(student);

    if (previousGrade !== -1) {
      this._roster[previousGrade] = this._roster[previousGrade].filter(
        (s) => s !== student
      );
    }

    if (this._roster[grade] === undefined) {
      this._roster[grade] = [];
    }

    this._roster[grade].push(student);
    this._roster[grade].sort();
  }

  grade(n: number): string[] {
    return [...(this._roster[n] || [])];
  }

  private findStudentGrade(student: string): number {
    for (const [grade, students] of Object.entries(this._roster)) {
      if (students.includes(student)) {
        return Number(grade);
      }
    }

    return -1;
  }
}
