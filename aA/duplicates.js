// Write an `Array.prototype.dups` method that will return an object containing
// the indices of all duplicate elements. The keys are the duplicate elements;
// the values are arrays of their indices in ascending order
//
// Example: 
// [1, 3, 4, 3, 0, 3, 0].dups => { 3: [1, 3, 5], 0: [4, 6] }

Array.prototype.dups = function () {
   const count = {};
   const duplicates = {};

   this.forEach( (ele, idx) => {
      count[ele] = count[elel] || [];
      count[ele].push(idx);
   });

   const keys = Object.keys(count).filter( ele => count[ele].length > 1);
   keys.forEach( (key) => {
      duplicates[key] = count[key];
   });

   return duplicates;
}