const eqArrays = function(actual, expected) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    return false;
  } else {
    return true;
  }
};
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) return false;
  
  for(let key of keys1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key],object2[key])) return false;
      continue;
    }
    if (object1[key] !== object2[key]) return false;
  }
  return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  const result = eqObjects(actual, expected);
  if (result) {
    console.log(`✅ ✅ ✅  Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); 