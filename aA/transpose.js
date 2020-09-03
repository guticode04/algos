// Write a function `transpose(arr)` that returns a 2d array transposed.
// e.g. transpose([[1,2],[3,4],[5,6]]) => [[1,3,5],[2,4,6]]

function transpose(arr) {
   const transposed = [];

   for (let col = 0; col < arr[0].length; col++) {
      const newRow = [];
      for (let row = 0; row < arr.length; row++) {
         newRow.push(arr[row][col]);
      }
      transposed.push(newRow);
   }
    
   return transposed;
}

console.log(transpose([[1, 2], [3, 4], [5, 6]]));