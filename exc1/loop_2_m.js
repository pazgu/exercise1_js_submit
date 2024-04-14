//Write a program that receives 5 numbers from the user, calculates a sum and average and prints 
//their values to the screen. Follow with a loop

let avg1 = 0;
let sum1 = 0;
let count = 0;

while (count < 5) {
    let num = parseFloat(prompt(`Enter number ${count+1}: `));
    if (!isNaN(num)) {
        sum1 += num;
        count++;
    } else {
        console.log("Invalid input. Please enter a valid number.");
        continue; 
    }
    count++;
}

if (count > 0) {
    avg1 = sum1 / count;
    console.log("Sum: ", sum1);
    console.log("Average: ", avg1);
} else {
    console.log("No valid numbers were entered.");
}

