// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"

const str = "This is a demo String find the largest word from it";

function findLArgestWord(str) {
  const arr = str.split(" ");
  let largestWord = "";
  arr.forEach((word) => {
    if (word.length > largestWord.length) {
      largestWord = word;
    }
  });
  return largestWord;
}

console.log(findLArgestWord(str));
