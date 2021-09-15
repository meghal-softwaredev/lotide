const assertArraysEqual = function(actual, expected) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const without = function(source, itemsToRemove) {
  let withoutArr = source.filter(remove => !itemsToRemove.includes(remove));
  return withoutArr;
}
let result1 = without([1, 2, 3], [1]);
assertArraysEqual(result1, [2, 3]);

let result2 = without(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(result2, ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);