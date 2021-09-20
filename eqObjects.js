const eqArrays = require("./eqArrays");
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) return false;
  
  for(let key of keys1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key],object2[key])) return false;
      continue;
    }
    if(!Array.isArray(object1[key]) && typeof object1[key] === "object") {
      if (!eqObjects(object1[key],object2[key])) return false;
      continue;
    }
    if (object1[key] !== object2[key]) return false;
  }
  return true;
};
module.exports = eqObjects;
