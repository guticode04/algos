// Write a recursive function, `factorialsRec(num)`, that returns the first
// `num` factorial numbers. Note that the 1st factorial number is 0!, which 
// equals 1. The 2nd factorial is 1!, the 3rd factorial is 2!, etc.

function factorialsRecursive(num) {
   if(num === 1) return [1];

   const factorials = factorialsRecursive(num - 1);
   factorials.push(factorials[factorials.length - 1] * (num -1));
   return factorials;
}