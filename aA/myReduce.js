Array.prototype.myReduce = function (callback, acc) {
   const array = this.slice();
   if (typeof acc === 'undefined') {
      acc = array.shift();
   }

   array.myEach(ele => {
      acc = callback(acc, ele);
   })

   return acc;
}