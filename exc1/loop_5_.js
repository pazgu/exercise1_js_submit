//Write a program that accepts an integer from the user and calculates an assembly.
// For example for 4 we get: 1*2*3*4 ZA 24

let factorial = 1;
let num = parseInt(prompt(`Enter your number: `));
while (isNaN(num) || num < 0) {
    console.log("Invalid input. Please enter a non-negative integer.");
    num = parseInt(prompt(`Enter your number: `));
}
while (num >= 0) {
    factorial *= num
    num --
}
console.log(factorial);