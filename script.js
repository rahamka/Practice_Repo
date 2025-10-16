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
  let value = "abcdefghijklmnopqrstuvwxyz";
  let textValue = str;
  let array = [];
  textValue = textValue[0];
  array.push(textValue);
  textValue = str.charAt(str.length - 1);
  array.push(textValue);
  let starting = array[0];
  let ending = array[1];
  for (let i = value[starting]; i <= value[ending]; i++) {
    console.log(i);
  }
}
findMissingLetter("abcdf");
