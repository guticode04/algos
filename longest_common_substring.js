function longestCommonSubstring(str1, str2) {
  let firstSubstring = substrings(str1);
  let secondSubstring = substrings(str2);

  let commonSubstring = [];

  firstSubstring.forEach((substring) => {
    if (secondSubstring.includes(substring)) common.push(substring);
  })

  let longestSubstring = commonSubstring[0];

  commonSubstring.forEach((sub) => {
    if (longestSubstring.length < sub.length) longestSubstring = sub;
  })
  return longestSubstring;
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


// str1 = "somethingcat";
// str2 = "thinganothercat";

// console.log(longestCommonSubstring(str1,str2));