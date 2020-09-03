// Write a `String.prototype.symmetricSubstrings` method that returns an array
// of substrings which are palindromes in alphabetical order. Only include 
// substrings of length > 1.
// e.g. "cool".symmetricSubstrings() => ["oo"]

String.prototype.symmetricSubstrings = function () {
   const symmetric = [];

   for (let i = 0; i < this.length; i++) {
      for (let j = 2; j <= this.length - i; j++) {
         const subs = this.slice(i, i + j);
         const reversed = subs.split('').reverse().join('');
         if (subs === reversed) symmetric.push(subs);
      }
   }

   return symmetric.sort();
   
}