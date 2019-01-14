function palindrome(str) {
  // Good luck!
  let strRegex = /[^a-z0-9]/ig;
  let filteredStr = str.replace(strRegex,"");
  let lowerStr = filteredStr.toLowerCase();
  let result = true;
  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] == lowerStr[lowerStr.length - 1 - i]){
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
}

console.log(palindrome("_Eye"));
