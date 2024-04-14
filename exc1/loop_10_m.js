//Write a program that accepts an integer from the user and prints its digits. 
//For example, if the user entered 673, then the program will print 6, then 7, then 3. 
//What should you use: while, for or do while

let num = parseInt(prompt(`Enter your number: `));
while (isNaN(num)) {
    console.log("Invalid input. Please enter an integer.");
    num = parseInt(prompt(`Enter your number: `));
}
let print_digit = 0;
let new_digit = num;
let len = num.toString().length;
while (len > 0){
    if (len == 1) {
        console.log(new_digit);
        break;
    }
    print_digit = Math.floor(new_digit/ Math.pow(10, len - 1)) 
    console.log(print_digit);
    new_digit -= print_digit*Math.pow(10, len - 1)
    len--;
}
