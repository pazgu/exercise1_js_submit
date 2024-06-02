//challenge 1

function arrayToObject(arr, key) {
  return arr.reduce((newBigObj, obj) => {
    newBigObj[obj[key]] = obj;
    return newBigObj;
  }, {});
}

const inventory = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 800 },
];

console.log(arrayToObject(inventory, "id"));

//challenge 4

function intersectArrays(arr1, arr2) {
  return arr1.filter((num) => arr2.includes(num));
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(intersectArrays(array1, array2));

//challenge 5

function uniqueValues(arr) {
  return arr.reduce((acc, num) => {
    if (!acc.includes(num)) acc.push(num);
    return acc;
  }, []);
}

const duplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(uniqueValues(duplicates));

//challenge 6

function groupBy(arr, key) {
  return arr.reduce((newBigObj, employee) => {
    if (!newBigObj[employee[key]]) {
      newBigObj[employee[key]] = [];
    }
    newBigObj[employee[key]].push(employee);
    return newBigObj;
  }, {});
}

const employees = [
  { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
  { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
  { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
  { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
  { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
  { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
];

console.log(groupBy(employees, "department"));
