// Back in the good old days, you used to be able to write a darn near
// uncrackable code by simply taking each letter of a message and incrementing 
// it by a fixed number, so "abc" by 2 would look like "cde", wrapping around 
// back to "a" when you pass "z".
//
// Write a function, `caesarCipher(str, shift)` that will take a message and an
// increment amount and outputs the encoded message. Assume lowercase and no 
// punctuation. Preserve spaces.
//
// The English alphabet, in order, is 'abcdefghijklmnopqrstuvwxyz'
//
// Examples: 
// caesarCipher(“abc”, 2) => “cde”
// caesarCipher(“xyz”, 1) => “yza"

function caesarCipher(str, shift) {
   const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
   let encoded = "";

   for(let i = 0; i < str.length; i++) {
      if(str[i] === ' ') {
         encoded += ' ';
         continue;
      }
      const offset = (alpha.indexOf(str[i]) + shift) % 26;
      encoded += alpha[offset];
   }

   return encoded;
}

console.log(caesarCipher("abc", 2));
console.log(caesarCipher("xyz", 1));