// Given an integer number n, return the difference between the product
// of its digits and the sum of its digits.

// Sample Input

// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15

// Input: n = 4421
// Output: 21
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21


function subtractProductAndSum(num) {
   let [product, sum] = getProductAndSum(num);
   return product - sum;
}

// Helper Function - Same idea as digital root
function getProductAndSum(num) {
   let product = 1;
   let sum = 0;
   let tempNum;

   while ( num > 0 ) {
      tempNum = num % 10;
      product *= tempNum;
      sum += tempNum;
      num = Math.floor(num/10);
   }
   return [ product, num ];
}