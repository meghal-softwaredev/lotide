const head = require("../head");
const assert = require("chai").assert;

describe("#head", function() {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("should return 5 for [5,6,7]", function() {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it("should return 'Hello' for ['Hello', 'Lighthouse', 'Labs']", function() {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("should return undefined for []", function() {
    assert.strictEqual(head([]), undefined);
  });
});
