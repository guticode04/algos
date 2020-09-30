function lengthOfLongestSubstring(string) {
   let longest = 0;

   for ( let i = 0; i < string.length; i++ ) {
      let count = 1;
      let set = new Set();
      set.add( string[i] );
      let j = i + 1;
      while ( !set.has( string[j] ) && j < string.length ) {
         set.add(string[j]);
         count++;
         j++;
      }
      if ( longest < count ) longest = count;
   }

   return longest;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // => 3
console.log(lengthOfLongestSubstring("bbbbb")); // => 1
console.log(lengthOfLongestSubstring("pwwkew")); // => 3
console.log(lengthOfLongestSubstring("")); // => 0
