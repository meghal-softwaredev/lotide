const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", function() {
  it("should return ['Lighthouse', 'Labs'] for ['Hello','Lighthouse', 'Labs']", function() {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("should return undefined for ['Hello']", function() {
    assert.deepEqual(tail(["Hello"]), undefined);
  });
  it("should return undefined for []", function() {
    assert.deepEqual(tail([]), undefined);
  });
  it("should be equal if original array is not altered by the tail function", function() {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    let wordsTail = tail(words);
    assert.equal(words.length, 3);
  });
});
