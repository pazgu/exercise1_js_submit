//Write a function that accepts an array of numbers and returns an array sorted from smallest to largest. 
//Change the original array. You must not use the sort function of an array.

function sort_array (numbers) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let numbers =  [2, 1, 9, 1, 4, 9, 8];
console.log(sort_array(numbers));