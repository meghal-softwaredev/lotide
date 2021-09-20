const assertObjectsEqual = require("../assertObjectsEqual");

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);   //PASS

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);   //PASS

const abc = { b: "1", a: "1" };
assertObjectsEqual(ab, abc);   //FAIL