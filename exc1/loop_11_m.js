//Write a game that grids an integer from 0 to 99. The user guesses and the game tells him if he is above or below
// the correct guess. At the end, the game displays the number of guesses and the total time. 
//You should check how you can get a random number in JS and how to make sure it is a whole number

let randomNumber = Math.floor(Math.random() * 100); 
let numGuesses = 0;
let startTime = Date.now();

while (true) {
    let guess = parseInt(prompt("Guess the number between 0 and 99: "));
    if (isNaN(guess) || guess < 0 || guess > 99) {
        alert("Invalid input. Please enter a number between 0 and 99.");
        continue;
    }
    numGuesses++;
    if (guess === randomNumber) {
        let endTime = Date.now();
        let totalTime = (endTime - startTime) / 1000; //in seconds
        alert(`Congratulations! You guessed the correct number (${randomNumber}) in ${numGuesses} guesses within ${totalTime} seconds.`);
        break;
    } else if (guess < randomNumber) {
        alert("The number is higher. Try again.");
    } else {
        alert("The number is lower. Try again.");
    }
}
