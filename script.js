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
