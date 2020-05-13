function primeFactorization(num) {
  //Base case
  if( num === 1 ) return [];

  //two is the first prime num
  let n = 2;

  //increment until prime factor
  while(!(isPrime(n) && num % n === 0)) {
    n++;
  }

  primeFactors = [n].concat(primeFactorization(num / n));

  return primeFactors;
};

//helper function

function isPrime(num) {
  if( num < 2) return false;

  let n = 2;
  while( n < num ) {
    if( num % n === 0 ) return false;
    n++;
  }
  
  return true;
};

//primeFactorization(12) => [2,2,3]
console.log(primeFactorization(12));
console.log(primeFactorization(144));