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

// if(navigator.onLine){

// }
