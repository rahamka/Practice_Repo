let output = [];
function sumFunction(sum) {
  let storing = [];
  for (let i = 1; i <= sum; i++) {
    storing.push(i);
  }
  let value = storing.reduce((prev, curr) => {
    return prev * curr;
  });
  output.push(value);
}

sumFunction(10);

output.forEach((items) => {
  for (const chars of items) {
    console.log(chars);
  }
});

// for Understanding how forEach works?
const myArray = ["Apple"];

myArray.forEach((item) => {
  for (const char of item) {
    console.log(char);
  }
});
