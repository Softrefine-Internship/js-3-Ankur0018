// Write a JavaScript program to generate all combinations of a string.

// Input: Dog
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

let str = "Dog";

function combinationsOfString(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

console.log(combinationsOfString(str));
