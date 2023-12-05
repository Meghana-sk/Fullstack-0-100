/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isCharLetter(char) {
  return /^[a-z]$/i.test(char);
}
function isPalindrome(str) {
  let copyStr = str.toLowerCase();
  let left = 0,
    right = str.length - 1;
  while (left <= right) {
    if (!isCharLetter(copyStr[left])) {
      left++;
      continue;
    }
    if (!isCharLetter(copyStr[right])) {
      right--;
      continue;
    }
    if (copyStr[left] == copyStr[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
