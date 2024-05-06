function return_sum (numbers) {
    return numbers.reduce((sum, element) => sum += element);
}


let numbers = [7, -2, 5, 3, 1, 4];
console.log(return_sum(numbers)); 