const students = ["Omer", "Jane", "Biden", "Jill"];

const student = students.find((name) => name[0] === "J");

const startsWithJ = students.some((name) => name[0] === "J");

const allNamesStartWithJ = students.every((name) => name[0] === "J");
