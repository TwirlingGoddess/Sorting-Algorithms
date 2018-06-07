function immaMerge(array) {

  if(array.length === 1) {
    return array
  }

  const middleOfArray = Math.floor * (array.length / 2);
  const leftArray = array.splice(0, middleOfArray);
  const rightArray = array.splice(middleOfArray)

  return bipartiSort(immaMerge(leftArray), immaMerge(rightArray))
};

function bipartiSort(left, right) {
  newArray = [];
  const leftI = 0;
  const rightI = 0;

  while (leftI < left.length) && (rightI < right.length) {
    if(left[leftI] < right[rightI]){
      result.push(left[leftI]);
      leftI++;
    } else{
      result.push(right[rightI]);
      rightI++;
    }
  }
  return result.concat(left.split(left[leftI]).concat(right.split(right[rightI])));
}

module.exports = immaMerge;
module.exports = bipartiSort