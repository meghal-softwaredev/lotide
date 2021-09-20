const map = require("../map");
const assert = require("chai").assert;
const words = ["ground", "control", "to", "major", "tom"];
describe("#map", function() {
  it("should return first letter of each word in array", function() {
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1,  ['g', 'c', 't', 'm', 't' ]);
  });
  it("should return length of each word in array", function() {
    const results1 = map(words, word => word.length);
    assert.deepEqual(results1,  [6, 7, 2, 5, 3]);
  });
  it("should return each word in uppercase of array", function() {
    const results1 = map(words, word => word.toUpperCase());
    assert.deepEqual(results1,  [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]);
  });
});
