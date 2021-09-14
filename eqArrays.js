const assertEqual = function(actual, expected) {
  if (actual !== expected) {
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => should PASS

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true) // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false) // => should PASS
