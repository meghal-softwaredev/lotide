const middle = function (arr) {
  let middleElement = [];
  const length = arr.length;
  const midIndex = Math.floor(length/2) ;
  if(length === 1 || length === 2) return;
  if(length%2 !== 0) {
    middleElement[0] = arr[midIndex];
  } else {
    middleElement = arr.slice(midIndex - 1, midIndex + 1);
  }
  return middleElement;
}
module.exports = middle;