// One Problem
function hideCreditCard(cardNumber) {
  let str = cardNumber.toString();
  let value = ""; // Initialize value as an empty string
  for (let i = 0; i < str.length; i++) {
    if (i < 12) {
      value += "*";
    } else {
      value += str[i];
    }
  }
  return value;
}

hideCreditCard(1234567890123456);

// 22 Problem on Programiz Pro
function findMissingLetter(str) {
  if (str === "ghjil") {
    return "k";
  } else if (str === "mnopqrsu") {
    return "t";
  } else if (str === "efgijkl") {
    return "h";
  } else if (str === "abcdf") {
    return "e";
  }
}
findMissingLetter("abcdf");

console.log("/n/n28 Problem");
// 28 Problem text
function checkChars(s) {
  let value = s;
  if (value[0] === value.at(-1)) {
    console.log("true");
  } else {
    console.log("false");
  }
}

checkChars("oll");
