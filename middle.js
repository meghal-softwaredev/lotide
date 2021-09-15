const assertArraysEqual = function(actual, expected) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
const eqArrays = function(actual, expected) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    return false;
  } else {
    return true;
  }
};
const middle = function (arr) {
  let middleElement = [];
  const length = arr.length;
  const midIndex = Math.floor(length/2) ;
  if(length === 1 || length === 2) return [];
  if(length%2 !== 0) {
    middleElement[0] = arr[midIndex];
  } else {
    middleElement = arr.slice(midIndex - 1, midIndex + 1);
  }
  return middleElement;
}
assertArraysEqual(eqArrays(middle([1]),[]),true);
assertArraysEqual(eqArrays(middle([1, 2]),[]),true);
assertArraysEqual(eqArrays(middle([1, 2, 3]),[2]),true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]),[3]),true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4]),[2, 3]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]),[3, 4]),true);
