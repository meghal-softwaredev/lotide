const letterPositions = require("../letterPositions");
const assert = require("chai").assert;
describe("#letterPositions", function() {
  it("should return letter position in sentence for single occurence", function() {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("should return letter position in sentence for multiple occurence", function() {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [ 3, 5, 15, 18 ]);
  });
});
