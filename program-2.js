// Write a JavaScript program to convert two-dimensional array in to an object.

// Input:  [
//     ["John", 12],
//     ["Jack", 13],
//     ["Matt", 14],
//     ["Maxx", 15]
// ]

// Output: {
//     "John": 12,
//     "Jack": 13,
//     "Matt": 14,
//     "Maxx": 15
// }

const arr = [
  ["John", 12],
  ["Jack", 13],
  ["Matt", 14],
  ["Maxx", 15],
];

function arrToObj(arr) {
  const newObject = {};
  arr.forEach((ele) => {
    return (newObject[ele[0]] = ele[1]);
  });
  return newObject;
}

console.log(arrToObj(arr));
