// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true

let str1 = "evil";
let str2 = "vile";

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  if (sortedStr1 === sortedStr2) {
    return true;
  } else {
    return false;
  }
}
console.log(checkAnagram(str1, str2));
