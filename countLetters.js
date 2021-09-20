const countLetters = function(sentence){
  let results = {};
  let letters = sentence.split('');
  for(let letter of letters) {
    if(letter === ' '){
      continue;
    }
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
}
module.exports = countLetters;