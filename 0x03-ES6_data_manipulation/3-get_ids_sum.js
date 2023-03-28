export default function getStudentIdsSum(studentList) {
  return studentList.reduce((sum, current) => (sum + current.id), 0);
}
