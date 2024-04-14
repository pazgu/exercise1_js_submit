//Write a program that prints the numbers 2,1,....100 each in a row

//for:
for(let row = 1; row < 101; row++) {
    console.log(i);
}

//Write a program that receives 5 numbers from the user, calculates a sum and average and prints 
//their values to the screen. Follow with a loop

//for 
let sum = 0;
let validInputs = 0;

for (let i = 1; i <= 5; i++) {
    let num = parseFloat(prompt(`Enter number ${i}: `));
    if (!isNaN(num)) {
        sum += num;
        validInputs++;
    } else {
        console.log("Invalid input. Please enter a valid number.");
        i--; 
    }
}

if (validInputs > 0) {
    let avg = sum / validInputs;
    console.log("Sum:", sum);
    console.log("Average:", avg);
} else {
    console.log("No valid numbers were entered.");
}