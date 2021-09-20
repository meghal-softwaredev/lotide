const eqArrays = require("./eqArrays");
const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const result = eqArrays(actual, expected);
  if (!result) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

module.exports = assertArraysEqual; 