/*

Write a function called “getLengthOfThreeWords”.

Given 3 words, “getLengthOfThreeWords” returns the sum of their lengths

*/





function getLengthOfThreeWords(word1, word2, word3) {
  return word1.length + word2.length + word3.length;
}
let totalLength = getLengthOfThreeWords("Apple", "Orange", "Banana");
console.log(totalLength);