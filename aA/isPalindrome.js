function isPalindrome(string) {
   return string === string.split("").reverse().join("");
}

console.log(isPalindrome("civic"));
console.log(isPalindrome("level"));
console.log(isPalindrome("palindrome"));