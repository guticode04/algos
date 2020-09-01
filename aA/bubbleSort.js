// Write an `Array.prototype.bubbleSort(callback)` method, that bubble sorts an array.
// It should take an optional callback that compares two elements, returning
// -1 if the first element should appear before the second, 0 if they are
// equal, and 1 if the first element should appear after the second. Do NOT call
// the built-in Array.prototype.sort method in your implementation. Also, do NOT
// modify the original array.
//
// Here's a quick summary of the bubble sort algorithm:
//
// Iterate over the elements of the array. If the current element is unsorted
// with respect to the next element, swap them. If any swaps are made before
// reaching the end of the array, repeat the process. Otherwise, return the
// sorted array.

const cb = (num1, num2) => {
   if (num1 < num2) {
      return -1;
   } else if (num1 === num2) {
      return 0;
   } else {
      return 1;
   }
};

Array.prototype.bubbleSort = function (callback) {
   if (typeof callback !== "fucntion") {
      callback = cb;
   }

   let resultArr = this.slice();
   let sorted = false;
   while (!sorted) {
      sorted = true;
      for (let i = 1; i < resultArr.length; i++) {
         if(callback(resultArr[i - 1], resultArr[i]) === 1) {
            sorted = false;
            let temp = resultArr[i - 1];
            resultArr[i - 1] = resultArr[i];
            resultArr[i] = temp;
         }
      }
   }

   return resultArr;
}


function swap(array, idx1, idx2) {
   let temp = array[idx1];
   array[idx1] = array[idx2];
   array[idx2] = temp;
   return array;
}

