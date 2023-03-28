export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const selectedCity = studentList.filter((student) => (student.location === city));

  const resultList = selectedCity.map((student) => {
    const stud = student;
    const grade = newGrades.filter((grade) => (grade.studentId === stud.id));
    if (grade.length) {
      stud.grade = grade['0'].grade;
    }
    return stud;
  });

  return resultList;
}
