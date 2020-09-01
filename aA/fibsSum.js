// Write a function, `fibsSum(n)`, that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0.
// Note that for this problem, the fibonacci sequence starts with [1, 1]. 

function fibsSum(n) {
   if(n ===1) return 1;
   if(n === 2) return 2;

   return fibsSum(n - 1) +  fib(n);

}

function fib(n) {
   if(n === 1) return 1;
   if(n === 2) return 1;
   return fib(n - 1) + fib(n - 2);
}


//without helper method

function fibsSum(n) {
   if(n === 1) return 1;
   if(n === 2) return 2;

   return fibsSum(n - 1) + fibsSum(n - 2) + 1;
}