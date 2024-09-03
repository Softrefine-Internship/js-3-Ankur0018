// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"

const str = "This is a demo String find the largest word from it";

function findLongestWords(str) {
  const words = str.split(" ");
  let maxLength = 0;
  let longestWords = [];

  words.forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWords = [word];
    } else if (word.length === maxLength) {
      longestWords.push(word);
    }
  });

  return longestWords.length > 1 ? longestWords.join(", ") : longestWords[0];
}

const result = findLongestWords(str);
console.log(result);
