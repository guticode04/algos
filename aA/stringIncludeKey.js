// Write a recursive function `stringIncludeKey(string, key)` that takes in
// a string to search and a key string. Return true if the string contains all 
// of the characters in the key in the same order that they appear in the key.
//
// stringIncludeKey("cadbpc", "abc") => true
// stringIncludeKey("cba", "abc") => false

function stringIncludeKey(str, key) {
   if (!key.length) return true;

   let keyChar = key[0];
   let keyIdx = string.indexOf(keyChar);

   if (keyIdx < 0) return false;
   return stringIncludeKey(string.slice(keyIdx + 1), key.slice(1));
}