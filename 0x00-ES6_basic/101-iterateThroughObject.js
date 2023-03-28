export default function iterateThroughObject(reportWithIterator) {
  let retString = '';
  for (const name of reportWithIterator) {
    if (retString.length < 1) {
      retString = name;
    } else {
      retString += ` | ${name}`;
    }
  }
  return retString;
}
