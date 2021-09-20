const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("#eqObjects", function() {
  it("should return true if both objects keys are not in order but equal", function() {
    assert.equal(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });
  it("should return false if both objects don't have same number of keys", function() {
    assert.equal(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }), false);
  });
  it("should return true if both objects with arrays are equal", function() {
    assert.equal(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });
  it("should return false if both objects with arrays are not equal", function() {
    assert.equal(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
  });
  it("should return true if both objects within objects are equal", function() {
    assert.equal(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it("should return false if both objects with objects are not equal", function() {
    assert.equal(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it("should return false if both objects are not equal one is objects with objects and other with plain object", function() {
    assert.equal(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});
