export default function getListStudentIds(objectArray) {
  let idArray = [];
  if (Array.isArray(objectArray)) {
    idArray = objectArray.map((object) => object.id);
  }
  return idArray;
}
