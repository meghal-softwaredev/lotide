const assertArraysEqual = function(actual, expected) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]) 
assertArraysEqual([1, 2, 3], [3, 2, 1]) 

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) 
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) 