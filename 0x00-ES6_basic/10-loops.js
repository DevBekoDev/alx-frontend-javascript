export default function appendToEachArrayValue(array, appendString) {
  const finalArray = [];
  for (const idx of array) {
    const value = idx;
    finalArray.push(`${appendString}${value}`);
  }

  return finalArray;
}
