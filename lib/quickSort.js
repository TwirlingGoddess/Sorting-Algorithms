
function quickSort(array, startIndex, endIndex) {
  let startIndex = array[0];
  let endIndex = array[-1];

  if( startIndex < endIndex) {

    const divider = splitOrganizer(array, startIndex, endIndex);

    quickSort(array, startIndex, divider - 1);
    quickSort(array, divider + 1, endIndex);
  }
  return array;
}



function splitOrganizer(array, startIndex, endIndex) {
  let i = -1;
  let pivotNum = endIndex;

  for (let j = 0; j <= array.length - 1; j++) {
    if ( array[j] < pivotNum) {
      i++

      let tempNum = array[i];
      array[i] = array[j];
      array[j] = tempNum;
    }
    let psuedoNum = array[i + 1];
    array[i + 1] = pivotNum;
    pivotNum = psuedoNum;
  }
  return (i + 1)
}


module.exports = quickSort;
module.exports = splitOrganizer;