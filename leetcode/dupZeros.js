// Given a fixed length array arr of integers, duplicate each occurrence of zero,
// shifting the remaining elements to the right.

function duplicateZeros(array) {
   for (let i = 0; i < array.length; i++) {
      if (array[i] === 0) {
         arr.splice(i, 0, 0);
         arr.pop();
         i++;
      }
   }
   return array;
}