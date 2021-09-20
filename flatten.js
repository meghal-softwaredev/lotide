const flatten = function(arr) {
  let flattenArr = [], k = 0;
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      for(let j = 0; j < arr[i].length; j++){
        flattenArr[k++] = arr[i][j];
      }
    } else {
      flattenArr[k++] = arr[i];
    }
  }
  return flattenArr;
}
module.exports = flatten;