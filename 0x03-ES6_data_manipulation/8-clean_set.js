export default function cleanSet(set, startString) {
  let returnStr = '';
  const ststr = startString.length;
  if (ststr > 0) {
    set.forEach((value) => {
      if (value.startsWith(startString)) {
        if (returnStr) {
          returnStr += `-${value.slice(ststr)}`;
        } else {
          returnStr = value.slice(ststr);
        }
      }
    });
  }

  return returnStr;
}
