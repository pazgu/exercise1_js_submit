// Write a program that receives n positive real books from the user and calculates the minimum and maximum 
//of them and prints it. The reception of the numbers ends when the user enters 0 or a negative number and then
// the maximum and minimum number calculated are printed. What should you use: while, for or do while

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
while (true) {
    let num = parseFloat(prompt(`Enter a positive real number (enter 0 or a negative number to stop):`));
    if (num <= 0 || isNaN(num)) {
        break; 
    }
    if (num > max) {
        max = num;
    }
    if (num < min) {
        min = num;
    }
}

if (max !== Number.NEGATIVE_INFINITY && min !== Number.POSITIVE_INFINITY) {
    console.log("Max:", max);
    console.log("Min:", min);
} else {
    console.log("No valid numbers were entered.");
}