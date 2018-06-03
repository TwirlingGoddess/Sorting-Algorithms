const unSortedArray = [1, 5, 7, 9];
const sortedArray = []

function insertFunc(array) {
  var zElement;
  for (let i = 0, i < array1.length, i++) {
    zElement = array[i];
    var j = i;
    while (let j > 0 && array[j -1] > zElement) {
      array[j] = arr[j - 1];
      j--;
    }
    array[j] = zElement;
  }
  return array;
};

export default insertFunc;

//create two different arrays, sorted and unsorted
//the item at index 0(the first item in the array) becomes the sorted array
//start by letting the first item in our array be the new sorted array
//move the first unsorted element and compare it to our sorted array starting with the last element
// function insertSort(arr) {
//  var el;
//  for(var i = 1; i < arr.length; i++) {
//    el = arr[i];
//    var j = i;
//    while(j > 0 && arr[j - 1] > el){
//      arr[j] = arr[j - 1];
//      j--;
//    }
//    arr[j] = el;
//  }
//  return arr;
// }
// export { insertSort }