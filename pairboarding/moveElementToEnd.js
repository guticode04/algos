// Move element to End
// You’re given an array of integers and an integer.Write a function that moves 
// all instances of that integer in the array to the end of the array and returns 
// the array. The function should perform this in place
// (i.e..It should mutate the input array) and doesn’t need to maintain the
//  order of the other integers.

// Sample Input
// Array = [2, 1, 2, 2, 2, 3, 4, 2]
// toMove = 2

// Sample Output
// [1, 3, 4, 2, 2, 2, 2, 2] // The numbers 1,3, and 4 could be ordered differently

// Time complexity: O(n)
// Space complexity: O(1)

function moveElementToEnd(arr, toMove) {
   let front = 0;
   let back = arr.length - 1;
   while ( front !== back ) {
      if (arr[back] === toMove) {
         back--;
      }
      if (arr[front] !== toMove) {
         front++;
      } else {
         // [ arr[back], arr[front] ] = [ arr[front], arr[back] ]
         [arr[front], arr[back]] = [arr[back], arr[front]];
      }
   }
   return arr;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2)); //[1, 3, 4, 2, 2, 2, 2, 2]