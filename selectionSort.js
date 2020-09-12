function selectionSort(arr) {
   for (let i = 0; i < arr.length; i++) {
      let minIdx = i;

      for (let j = i + 1; j < arr.length; j++) {
         if (arr[j] < arr[minIdx]) {
            minIdx = j;
         }
      }
      swap(arr, minIdx, i);
   }
   return arr;
}

function swap(arr, i1, i2) {
   let temp = arr[i1];
   arr[i1] = arr[i2];
   arr[i2] = temp;
   return arr;
}