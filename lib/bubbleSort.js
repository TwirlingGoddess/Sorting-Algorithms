function arrayMama() {
  for (let i = 0; i < array1.length; i++) {
    for(let j = ; j < array1.length; i++) {
      if(array[j - 1] > array[j]) {
        [array[j-1], array[j]] = [array[j], array[j-1]]
      }
    }
  }
  return arrayMama;
}

export default arrayMama;
