// Write an `Array.prototype.myFlatten()` method which flattens a
// multi-dimensional array into a one-dimensional array.
// Example:
// [["a"], "b", ["c", "d", ["e"]]].myFlatten() => ["a", "b", "c", "d", "e"]

Array.prototype.myFlatten = function () {
   let flattened = [];

   this.forEach((ele) => {
      if (ele instanceof Array) {
         flattened = flattened.concat(ele.myFlatten());
      } else {
         flattened.push(ele);
      }
   });

   return flattened;
}