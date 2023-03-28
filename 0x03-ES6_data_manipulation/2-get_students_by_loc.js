export default function getStudentsByLocation(studentList, city) {
  let selectedList = [];
  if (Array.isArray(studentList)) {
    selectedList = studentList.filter((student) => (student.location === city));
  }
  return selectedList;
}
