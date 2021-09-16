
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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(eqArrays(results1,  ['g', 'c', 't', 'm', 't' ]), true);

const results2 = map(words, word => word.length);
assertArraysEqual(eqArrays(results2,  [6, 7, 2, 5, 3]), true);

const results3 = map(words, word => word.toUpperCase());
assertArraysEqual(eqArrays(results3,  [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]), true);

