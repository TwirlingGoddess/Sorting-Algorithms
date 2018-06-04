
function quickSort(array, startIndex, endIndex) {
  let i = -1;
  let j = 0;
  let startIndex = array[0]
  let endIndex = array[-1]

  if (startIndex < endIndex)

  let divider = splitOrganizer(array, startIndex, endIndex)

  quickSort(array, startIndex, divider - 1)
  quickSort(array, divider + 1, endIndex)
}




function splitOrganizer() {
  for(j = 0; j <= array.length - 1; j++) {
    if (array[j] < pivotNum) {
      i++;
      let psuedoNum = array[i];
      array[i] = array[j];
      array[j] = psuedoNum;
    } 

    let psuedoNum = array[i + 1];
    array[i + 1] = pivotNum;
    pivotNum = psuedoNum;
  } 
  return (i + 1)
}


export default nesQuick;