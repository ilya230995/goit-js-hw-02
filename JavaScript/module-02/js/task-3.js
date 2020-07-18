const findLongestWord = function (string) {
  const stringSplit = string.split(" ");

  let lengthWord = 0;
  let longestWord = null;

  for (let i = 0; i < stringSplit.length; i++) {
    if (stringSplit[i].length > lengthWord) {
      lengthWord = stringSplit[i].length;
      longestWord = stringSplit[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord("May the force be with you"));

//   console.log(findLongestWord('Google do a roll')); // 'Google'

//   console.log(findLongestWord('May the force be with you')); // 'force'
