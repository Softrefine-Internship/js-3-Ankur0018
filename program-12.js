// Write a JavaScript program to get the longest string in an array.

// Input:
// arr = [
// "JavaScript",
// "Python",
// "Java",
// "C++",
// "Ruby",
// "Swift",
// ]

// Output: "JavaScript"

const arr = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift"];

function findLongestWords(arr) {
  let maxLength = 0;
  let longestWords = [];

  arr.forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWords = [word];
    } else if (word.length === maxLength) {
      longestWords.push(word);
    }
  });

  return longestWords.length > 1 ? longestWords.join(", ") : longestWords[0];
}

const result = findLongestWords(arr);
console.log(result);
