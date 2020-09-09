// Write a recursive function `recSum(numArr)` that returns the sum of all
// elements in an array. Assume all elements are numbers.

function recursiveSum(numsArr) {
   if (!numsArr.length) return 0;
   return numsArr[0] + recursiveSum(numsArr.splice(1));
}