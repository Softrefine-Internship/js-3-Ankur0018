// Write a JavaScript program to flatten object into single depth object.

// Input:
// obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// Output:
// obj = {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
// }

const obj = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
  },
};

function flatObj(obj) {
  const flattenedObj = {};
  Object.keys(obj).forEach((parentKey) => {
    const value = obj[parentKey];
    if (!(typeof value === "object")) {
      return (flattenedObj[parentKey] = value);
    } else {
      Object.keys(value).forEach((subKey) => {
        return (flattenedObj[`${parentKey}.${subKey}`] = value[subKey]);
      });
    }
  });
  return flattenedObj;
}

console.log(flatObj(obj));
