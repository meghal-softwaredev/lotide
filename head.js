const head = function(arr) {
  if (arr === []) {
    return undefined;
  } else {
    return arr.shift();
  }
};
module.exports = head;