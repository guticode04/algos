
function pyramid(n) {
   // if (num === 1) console.log('#')
   // for (let i = 1; i <= num; i++) {
   //    let str = '#';
   //    console.log(str * i);
   //    console.log('/n')
   // }
   const mid = Math.floor((2 * n - 1) / 2)
   for (let row = 0; row < n; row++) {
      let level = '';

      for (let col = 0; col < 2 * n - 1; col++) {
         if (mid - row <= col && mid + row >= col) {
            level += '#'
         } else {
            level += ' '
         }
      }
      console.log(level)
   }


}

console.log(pyramid(3));
console.log(pyramid(1));
// console.