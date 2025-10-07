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

for (let items of output) {
  console.log(items);
}
