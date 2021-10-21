export class GradeSchool {
  private _roster = new Map();
  private _studentsList = new Set();
  
  roster() {
    return Object.fromEntries(
      [...this._roster.entries()]
        .sort((a, b) => a[0] - b[0])
        .map(([key, value]) => ([key, [...value]]))
    );
  }

  add(student: string, grade: number) {
    if (this._studentsList.has(student)) {
      return;
    }

    const students = this._roster.get(grade) || [];
    students.push(student)
    this._roster.set(grade, students.sort((a: string, b: string)=> a.localeCompare(b)));
    this._studentsList.add(student);
  }

  grade(n: number) {
    const students = this._roster.get(n) || [];
    return [...students];
  }
}
