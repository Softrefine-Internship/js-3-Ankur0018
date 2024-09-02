// Write a JavaScript program to count frequency of character in string.

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }

const str = "hello";

function countFreqChar(str) {
  const frequency = {};

  str.split("").forEach(function (char) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  });

  return frequency;
}

console.log(countFreqChar(str));
