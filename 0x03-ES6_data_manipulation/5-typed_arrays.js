export default function createInt8TypedArray(length, position, value) {
  const arrBuffer = new ArrayBuffer(length);
  const int8 = new Int8Array(arrBuffer);
  if (position >= int8.byteLength) {
    throw Error('Position outside range');
  } else {
    int8[position] = value;
  }

  return arrBuffer;
}
