export class GradeSchool {
  private _roster = new Map<number, string[]>();
  private _studentsList = new Map<string, number>();

  roster(): { [key: number]: string[] } {
    return Object.fromEntries(
      [...this._roster.entries()]
        .sort((a, b) => a[0] - b[0])
        .map(([key, value]) => [key, [...value]])
    );
  }

  add(student: string, grade: number): void {
    if (this._studentsList.has(student)) {
      const previousGrade = this._studentsList.get(student)!;

      this._roster.set(
        previousGrade,
        this._roster.get(previousGrade)!.filter((s) => s !== student)
      );
    }

    const students = this._roster.get(grade) || [];
    students.push(student);
    this._roster.set(
      grade,
      students.sort((a: string, b: string) => a.localeCompare(b))
    );
    this._studentsList.set(student, grade);
  }

  grade(n: number): string[] {
    const students: string[] = this._roster.get(n) || [];
    return [...students];
  }
}
