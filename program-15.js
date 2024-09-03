// Write a JavaScript program to check subset.

// Example 1:
// Input:
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

// Output: false

// Example 2:
// Input:
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true

//Example 1:
let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4]);

// Example 2:

let set3 = new Set([3, 4]);
let set4 = new Set([1, 2, 3, 4, 5]);

function checkSubset(set1, set2) {
  for (let item of set1) {
    if (!set2.has(item)) {
      return false;
    }
  }
  return true;
}

console.log(checkSubset(set1, set2));
console.log(checkSubset(set3, set4));
