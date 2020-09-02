// Write a function `subsets(arr)` that recursively returns all subsets of an
// array. Examples:
// `subsets([1,2])` => [[],[1],[2],[1,2]]
// `subsets([1,2,3])` => [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]

function subsets(arr) {
   if (!arr.length) return [[]];

   const last = arr[arr.length - 1];
   const subs = subsets(arr.slice(0, arr.length -1));

   return subs.concat( subs.map((ele) => {
      let newArr = ele.slice(0);
      newArr.push(last);
      return newArr;
   }));
};