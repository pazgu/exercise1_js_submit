function return_sum (numbers) {
    return numbers.reduce((sum, element) => sum + element);
}


let numbers = [7, -2, 5, 3, 1, 4];
console.log(return_sum(numbers)); 



function return_even_array (numbers) {
    const initialValue = 0;
    return numbers.reduce((count, element) => (element % 2 == 0 ? count +1 : count), initialValue);
}

// in reduce you need an initial value so it won't take the first value of the array

console.log(return_even_array(numbers)); 

