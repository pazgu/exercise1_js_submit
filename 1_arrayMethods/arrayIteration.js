const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => {
  console.log(`number: ${number} and index: ${index}`);
});

const doubledNumbers = numbers.map((number) => number * 2);

const evenNumbers = numbers.filter((number) => number % 2 === 0);

const sumOfNumbers = numbers.reduce((acc, number) => {
  acc += number;
  return sum;
}, 0);
