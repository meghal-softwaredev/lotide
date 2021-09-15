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

const without = function(source, itemsToRemove) {
  let withoutArr = source.filter(remove => !itemsToRemove.includes(remove));
  return withoutArr;
}

assertArraysEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]),true);

assertArraysEqual(eqArrays(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]),true);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);