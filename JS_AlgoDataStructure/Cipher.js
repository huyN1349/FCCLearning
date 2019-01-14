function rot13(str) { // LBH QVQ VG!
// Create an object for the alphabet to pull the index of each character
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var dictAlphabet = {};
  for (let i = 0; i < alphabet.length; i++) {
    dictAlphabet[alphabet[i]] = i;
  }

  var result = "";
  var reGex = /[^a-zA-Z]+/g; //create a regex to pass on the non-alphabetic character
  for (let j = 0; j < str.length; j++) {
    if (reGex.test(str[j]) == true) {
      result += str[j];
    } else {
      var charIndex = dictAlphabet[str[j].toUpperCase()];
      var cipherIndex = (charIndex + 13) % 26;
      result += alphabet[cipherIndex];
    }

  }
  return result;
}

// Change the inputs below to test
console.log(rot13("sERR PBQR PNZC"));
