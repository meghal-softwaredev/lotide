const countOnly = require("../countOnly");
const assert = require("chai").assert;

const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];

describe("#countOnly", function() {
  it("should return { Jason: 1, Fang: 2 }", function() {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { "Jason": 1,  "Fang": 2});
  });
});
