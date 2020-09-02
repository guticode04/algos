// Write a recursive function that returns all of the permutations of an array
// (A permutation is a possible ordering of the elements in an array)
// e.g. permutations([1,2]) => [[1,2], [2,1]]
// e.g. permutations([1,2,3]) => [[1,2,3], [1,3,2], [2,1,3], 
//                                [2,3,1], [3,1,2], [3,2,1]]

function permutations(arr) {
   if (arr.length <= 1) {
      return [arr];
   }

   const result = [];
   const first = arr.pop();
   const previous = permutations(arr);

   previous.forEach( permutation => {
      for (let i = 0; i <= permutation.length; i++) {
         let next = permutation.slice(0,i).concat([first]).concat(permutation.slice(i));
         result.push(nextPermutation);
      }
   });

   return result;
}