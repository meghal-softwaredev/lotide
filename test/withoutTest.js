const without = require("../without");
const assert = require("chai").assert;

describe("#without", function() {
  it("should return [2, 3] for ([1, 2, 3], [1])", function() {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("should return ['1', '2'] for ['1', '2', '3'], [1, 2, '3']", function() {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);
  });
  it("should be equal if original array is not altered by the without function", function() {
    const words = ["hello", "world", "lighthouse"];
    let wordsWithout = without(words, ["lighthouse"]);
    assert.equal(words.length, 3);
  });
});
