function hideCreditCard(cardNumber) {
  for (let items in cardNumber) {
    console.log(items);
  }
  return console.log(`************${cardNumber}`);
}

hideCreditCard(1234567890123456);
