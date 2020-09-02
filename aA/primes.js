// Write a function `primes(num)`, which returns an array of the first "num" primes.
// You may wish to use an `isPrime(num)` helper function.

function primes(n) {
   const primeNums = [];
   let i = 2;

   while (primeNums.length < n) {
      if (isPrime(i)) primeNums.push(i);
      i +=1;
   }

   return primeNums;
};

function isPrime(num) {
   for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
   }
   return true;
};