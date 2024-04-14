//Write a program that accepts an integer from the user and calculates an assembly.
// For example for 4 we get: 1*2*3*4 ZA 24

let factorial = 1;
let num;
do {
    num = parseInt(prompt(`Enter your number: `));
    if (isNaN(num) || num < 0) {
        console.log("Invalid input. Please enter a non-negative integer.");
    }
} while (isNaN(num) || num < 0);

let i = 1;
do {
    factorial *= i;
    i++;
} while (i <= num);

console.log(factorial);

///Write a program that accepts five real numbers from the user and calculates the minimum and maximum of them and prints it.
// You can use Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
let j = 0;

do {
    let num = parseFloat(prompt(`Enter your number: `));
    if (!isNaN(num)) {
        j++;
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
} while (j < 5);

console.log("max number: ", max);
console.log("min number: ", min);

