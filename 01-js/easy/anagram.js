/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let mappedObj = {};
  const cleanStr = (str) => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  if (str1.length !== str2.length) return false;
  for (let i of cleanStr(str1)) {
    if (!mappedObj[i]) {
      mappedObj[i] = 1;
    } else {
      mappedObj[i]++;
    }
  }
  for (let i of cleanStr(str2)) {
    if (mappedObj[i]) {
      mappedObj[i]--;
    }
  }
  for (let i in mappedObj) {
    if (mappedObj[i] != 0) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
