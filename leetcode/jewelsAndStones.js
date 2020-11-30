// You're given strings J representing the types of stones that are jewels, and 
// S representing the stones you have.  Each character in S is a type of stone 
// you have.  You want to know how many of the stones you have are also jewels.
// The letters in J are guaranteed distinct, and all characters in J and S are 
// letters. Letters are case sensitive, so "a" is considered a different type of 
// stone from "A".

// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0

// So we need to go through both strings and compare each character. Once we
// get a match we increment our count. Or we can go through "stones" and check
// to see if it is a jewel.

// Pseudocode 
// create variable to keep track of count
//    let count = 0;
// iterate through stones string
//    for-loop
// inside loop check for inclusion of stones[i] in jewels
// increment count if true
// return count

function jewelsAndStones(jewels, stones) {
   let count = 0;
   for (let i = 0; i < stones.length; i++) {
      const char = stones[i];
      if ( jewels.includes(char)) count++;
   }
   return count;
}

let jewels = "aA";
let stones = "aAAbbbb";

console.log(jewelsAndStones(jewels,stones));