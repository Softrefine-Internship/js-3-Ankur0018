// Write a JavaScript program to modify an object’s property in an array of objects.

// Input:
// arr = [
//     {
//         employee_id: 1,
//         employee_name: "Aman",
//     },
//     {
//         employee_id: 2,
//         employee_name: "Bhargava",
//     },
//     {
//         employee_id: 3,
//         employee_name: "Chaitanya",
//     },
//  ]

// Output:
// [
//     { employee_id: 1, employee_name: 'Aman' },
//     { employee_id: 2, employee_name: 'Rahul' },
//     { employee_id: 3, employee_name: 'Chaitanya' }

const arr = [
  {
    employee_id: 1,
    employee_name: "Aman",
  },
  {
    employee_id: 2,
    employee_name: "Bhargava",
  },
  {
    employee_id: 3,
    employee_name: "Chaitanya",
  },
];

function modifyObj(arr, id, newName) {
  const objToBeUpdated = arr.find((obj) => obj.employee_id === id);
  objToBeUpdated.employee_name = newName;
  return arr;
}
console.log(modifyObj(arr, 2, "Ankur"));
