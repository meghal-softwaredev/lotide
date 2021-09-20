const flatten = require("../flatten");
const assert = require("chai").assert;

describe("#flatten", function() {
  it("should return [1, 2, 3, 4, 5, 6] for ([1, 2, [3, 4], 5, [6]])", function() {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});

