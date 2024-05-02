///Write a program that accepts five real numbers from the user and calculates the minimum and maximum of them and prints it.
// You can use Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
let i = 0;
let validInputs = 0;

while (i < 5) {
    let num = parseFloat(prompt(`Enter your number: `));
    if (!isNaN(num)) {
        validInputs++;
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        } 
    } else {
        console.log("Invalid input. Please enter a valid number.");
        continue;
    }
    i++;
}

if (validInputs > 0) {
    console.log("Max number: ", max);
    console.log("Min number: ", min);
} else {
    console.log("No valid numbers were entered.");
}
