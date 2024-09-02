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

function findLArgestWord(arr) {
  let largestWord = "";
  arr.forEach((word) => {
    if (word.length > largestWord.length) {
      largestWord = word;
    }
  });
  return largestWord;
}

console.log(findLArgestWord(arr));
