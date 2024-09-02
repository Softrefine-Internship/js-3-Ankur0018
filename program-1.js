// Write a JavaScript program to check if obj1 contains all the property values of obj2.

// Example 1:
// Input: obj1: { name: "John", age: 23; degree: "CS" }, obj2: {age: 23, degree: "CS"}
// Output: true

// Example 2:
// Input: obj1: { name: "John", degree: "CS" }, obj2: {name: "Max", age: 23, degree: "CS"}
// Output: false

function containsAllProperties(obj1, obj2) {
  for (let key in obj2) {
    if (!(key in obj1) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

// Example 1
const obj1_1 = { name: "John", age: 23, degree: "CS" };
const obj2_1 = { age: 23, degree: "CS" };
console.log(containsAllProperties(obj1_1, obj2_1));

//Example 2
const obj3 = { name: "John", degree: "CS" };
const obj4 = { name: "Max", age: 23, degree: "CS" };
console.log(containsAllProperties(obj3, obj4));
