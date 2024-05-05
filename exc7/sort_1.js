//Write a function that accepts an array of numbers and returns an array sorted from smallest to largest. 
//Do not change the original array. You must not use the sort function of an array.
// What are the complications of running?

function sort_array(arr) {
    const sortedArr = [...arr];

    for (let i = 0; i < sortedArr.length - 1; i++) {
        for (let j = 0; j < sortedArr.length - 1 - i; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                const temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }

    return sortedArr;
}

//time complexity of O(n^2)

let numbers =  [2, 1, 9, 1, 4, 9, 8];
console.log(sort_array(numbers));