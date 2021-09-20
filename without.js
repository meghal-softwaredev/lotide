const without = function(source, itemsToRemove) {
  let withoutArr = source.filter(remove => !itemsToRemove.includes(remove));
  return withoutArr;
}
module.exports = without;