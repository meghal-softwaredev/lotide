const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] for ['Hello','Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("should return undefined for ['Hello']", () => {
    assert.deepEqual(tail(["Hello"]), undefined);
  });
  it("should return undefined for []", () => {
    assert.deepEqual(tail([]), undefined);
  });
  it("should be equal if original array is not altered by the tail function", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    let wordsTail = tail(words);
    assert.equal(words.length, 3);
  });
});
