// Write a `String.prototype.realWordsInString(dictionary)` method, that returns
// an array containing the substrings of `string` that appear in `dictionary`.
// sorted alphabetically. This method does NOT return any duplicates.

//Solution 1

String.prototype.realWordsInString = function (dictionary) {
   const realWords = [];

   dictionary.forEach((ele) => {
      if (this.includes(ele)) realWords.push(ele);
   });
   return realWords.sort();
};

