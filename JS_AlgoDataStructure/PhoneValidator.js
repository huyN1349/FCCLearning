function telephoneCheck(str) {
  // Good luck!
  var regex = /^(1[\s\-]?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  console.log(str.match(regex));
  return regex.test(str);
}

console.log(telephoneCheck("1-555-555-5555"));
