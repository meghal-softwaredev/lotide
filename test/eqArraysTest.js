const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

describe("#eqArrays", function() {
  it("should return true if both arrays of number type are equal", function() {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false if both arrays of number type are not equal", function() {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);
  });
  it("should return true if both arrays of string type are equal", function() {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("should return false if both arrays of string type are not equal", function() {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it("should return true if both arrays having nested arrays are equal", function() {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("should return false if both arrays having nested are not equal", function() {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it("should return false for [[2, 3], [4]], [[2, 3], 4]", function() {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});
