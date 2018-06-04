
function insertYoSelf(array) {
  for (i = 0; i < array.length; i++) {
    let value = array[i]

    while ((j = (i - 1); j > -1 && array[j] > value; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = value
  }
  return array
}