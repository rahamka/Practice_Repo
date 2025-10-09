function factorialDigitSum(sum) {
  // calculate factorial
  let factorial = 1n;
  // BigInt for handle large numbers
  for (let i = 1; i <= sum; i++) {
    factorial *= BigInt(i);
  }
  // convert factorial toString to sum the digits
  let factorialStr = factorial.toString();
  let Sum = 0;
  for (let digits of factorialStr) {
    Sum += parseInt(digits);
  }
  return Sum;
}

console.log(factorialDigitSum(4));
// This code is solving the challenge of the factorialCounting?
