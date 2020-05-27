function longestCommonSubstring(str1, str2) {
  
}

function substrings(str) {
  let subs = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let sub = str.slice(i, j);
      subs.push(sub);
    }
  }
  return subs;
}