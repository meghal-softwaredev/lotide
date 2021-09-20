const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", function() {
  it("should return undefined for [1]", function() {
    assert.deepEqual(middle([1]), undefined);
  });
  it("should return undefined for [1, 2]", function() {
    assert.deepEqual(middle([1, 2]), undefined);
  });
  it("should return [2] for [1, 2, 3]", function() {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return [3] for [1, 2, 3, 4, 5]", function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should return [2, 3] for [1, 2, 3, 4]", function() {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

