function largestContiguousSubsum(arr) {
   let max = arr[0] || 0;
   let sum = 0;

   for (let i = 1; i < arr.length; i++) {
      sum += arr[i];
      if (sum > max) {
         max = sum;
      } else if (sum < 0) {
         sum = 0;
      }
   }
   return max;
}