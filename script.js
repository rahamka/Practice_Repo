// Chellange 2 Coins = 50
function findUnion(arr1, arr2) {
  let value1 = arr1;
  let value2 = arr2;
  let result = arr1.concat(arr2);
  function removeDuplicatesWithSet(arr) {
    return [...new Set(arr)];
  }
  const uniqueNumbers = removeDuplicatesWithSet(result);
  return uniqueNumbers;
}

// Chellange 3 Coins = 50
{
  // my code
  function addToNestedArray(arr, num) {
    let value1 = arr[0];
    value1.push(num);
    let value2 = arr[1];
    value2.push(num);
    let value3 = arr[2];
    value3.push(num);
    const result = [value1, value2, value3];
    return result;
  }
  // correct code
  function addToNestedArray(arr, num) {
    arr.forEach((subArr) => subArr.push(num));
    return arr;
  }
}

// Chellange 4 Coins = 50
{
  function isPrime(n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i == 0) return false;
    }
    return true;
  }

  function formsWagstaffPrime(p) {
    if (!isPrime(p)) return false;
    let wagstaff = (Math.pow(2, p) + 1) / 3;
    return isPrime(wagstaff);
  }
}

// LeetCode Chellange

var createCounter = function (init) {
  let currentValue = init;
  return {
    increment: function () {
      currentValue += 1;
      return currentValue;
    },
    decrement: function () {
      currentValue -= 1;
      return currentValue;
    },
    reset: function () {
      currentValue = init;
      return currentValue;
    },
  };
};
