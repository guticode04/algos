//Given an a scrambled array of n unique numbers between 0 and n.
//Find the missing number.

function missingNum(arr) {
   let sum = 0;
   for (let i = 0; i <= arr.length; i++) {
      sum += i
   }

   for (let i = 0; i < arr.length; i++) {
      sum -= arr[i]
   }
   return sum;
}