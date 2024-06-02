const fruits = ["banana", "apple"];

function getNewFruits(fruit) {
  return [...fruits, fruit];
}

const newFruits = getNewFruits("orange");
console.log(newFruits);

const cat = {
  nickname: "Fluffy",
  age: 1,
};

function incrementAge(cat) {
  return {
    ...cat,
    age: cat.age + 1,
  };
}

console.log(cat);
const newCat = incrementAge(cat);
console.log(newCat);
const newNewCat = incrementAge(cat);
console.log(newNewCat);

/////////////////////////////////////////////////////////////////////////////////////////////
const persons = [
  {
    _id: "1",
    name: "baba",
    age: 30,
    hobbies: ["sing", "work"],
  },
  {
    _id: "2",
    name: "mama",
    age: 80,
    hobbies: ["learn", "smoke", "sing"],
  },
  {
    _id: "3",
    name: "lulu",
    age: 12,
    hobbies: ["TV"],
  },
];

//write a function takes an id and returns the person

const getPersonById = (id) => {
  return persons.find((person) => person._id === id);
};

const newPersons = getPersonById(3);
console.log(newPersons);

//write a function that returns all the persons that like to sing (hobbies)

function loveSinging() {
  return persons.filter((person) => person.hobbies.includes["sing"]);
}

//write a function that check if any person is more than 70 years old

const yers70 = () =>
  persons.some((person) => {
    person.age > 70;
  });

//write a function that check if all thw users are older than 18

function yers70() {
  persons.every((person) => {
    person.age > 18;
  });
}

//write a function that returns an array of ids

function allID() {
  return persons.map((person) => person.id);
}

//write a function that returns an array of all the hobbies of all persons

function getHobbies() {
  return persons
    .map((person) => person.hobbies)
    .reduce((acc, hobbies) => acc.concat(hobbies), []);
}

//wrie a function that sums all the ages of all persons

const ageSum = persons.reduce((sum, person) => {
  sum += person.age;
  return sum;
}, 0);

//write a function that takes a new person object and id (f.e 2).
//it returns a new array but replace the new person with the person
//with the given id (use slice) (use reduce also)

function newArray(new_person, new_id) {
  return persons.map((person) => (person.id === new_id ? new_person : person));
}

function newArray(new_person, new_id) {
  const index = persons.findIndex((person) => person.id === new_id);
  if (index === -1) {
    // return the original array
    return persons.slice();
  } else {
    //return [persons.slice(0, index).concat(new_person, persons.slice(index + 1))];
    //one more way
    return [
      ...persons.slice(0, index),
      new_person,
      ...persons.slice(index + 1),
    ];
  }
}
