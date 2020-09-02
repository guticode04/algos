// Write a function `jumbleSort(string, alphabet)`.
// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
//
// The English alphabet, in order, is 'abcdefghijklmnopqrstuvwxyz'
//
// **Do NOT use the built-in `Array.prototype.sort` in your implementation.**
//
// Example:
// jumbleSort("hello") => "ehllo"
// jumbleSort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'

function jumbleSort(str, alpha = null) {
   alpha = alpha || 'abcdefghijklmnopqrstuvwxyz'.split('');
   str = str.split('');

   let sorted = false;
   while(!sorted) {
      sorted = true;
      for(let i = 0; i < str.length; i++){
         if(i === str.length - 1) break;
         let letter = str[i];
         let next = str[i + 1];
         if(alpha.indexOf(letter) > alpha.indexOf(next)) {
            str[i] = next;
            str[i + 1] = letter;
            sorted = false;
         }
      }
   }

   return str.join('');
}

console.log(jumbleSort("hello")); // => "ehllo"
console.log(jumbleSort("hello", ['o', 'l', 'h', 'e'])); // => 'ollhe'