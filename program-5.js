// Write a JavaScript program to count number of occurrences of repeated names in an array of objects.

// Input:
// arr = [
//     {
//        employeeName: "Ram",
//        employeeId: 23
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 24
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 21
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 25
//     },
//     {
//        employeeName: "Kisan",
//        employeeId: 22
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 20
//     }
//  ]

// Output:
// [
//     {employeeName: "Ram", occurrences: 3},
//     {employeeName: "Shyam", occurrences: 2},
//     {employeeName: "Kisan", occurrences:  1}
// ]

const arr = [
  {
    employeeName: "Ram",
    employeeId: 23,
  },
  {
    employeeName: "Shyam",
    employeeId: 24,
  },
  {
    employeeName: "Ram",
    employeeId: 21,
  },
  {
    employeeName: "Ram",
    employeeId: 25,
  },
  {
    employeeName: "Kisan",
    employeeId: 22,
  },
  {
    employeeName: "Shyam",
    employeeId: 20,
  },
];

function numOfOccurrences(arr) {
  const nameCounts = {};
  arr.forEach((employee) => {
    const name = employee.employeeName;

    if (nameCounts[name]) {
      return nameCounts[name]++;
    } else {
      return (nameCounts[name] = 1);
    }
  });

  const result = Object.keys(nameCounts).map((name) => ({
    employeeName: name,
    occurrences: nameCounts[name],
  }));
  return result;
}

console.log(numOfOccurrences(arr));
