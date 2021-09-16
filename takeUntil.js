const eqArrays = function(actual, expected) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    return false;
  } else {
    return true;
  }
};
const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected);
  if (!result) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if(!callback(item))
      results.push(item);
    else return results;
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(eqArrays(results1,  [ 1, 2, 5, 7, 2 ]), true);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(eqArrays(results2,  [ 'I\'ve', 'been', 'to', 'Hollywood' ]), true);

