// Write a function, `factors(num)`, that returns an array containing the factors
// of a number in ascending order.

function factors(num) {
   const facts = Array.from(Array(num).map( (ele, idx) => idx + 1));
   return facts.filter( ele => num % ele === 0);
}