Array.prototype.myRotate = function (times = 1) {
   let rotations;
   const rotated = this.slice(0);

   if (times < 0) {
      rotations = this.length + (times % this.length);
   } else {
      rotations = times % this.length;
   }

   for (let i = 0; i < rotations; i++) {
      rotated.push(rotated.shift());
   }

   return rotated;
};