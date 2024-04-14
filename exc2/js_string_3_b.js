//Write a function in JS that accepts a string of key:value separated by a comma. 
//The length of the longest value string must be returned. For example, for the string 7 

function return_max(str) {
    let max = 0;
    let arr = str.split(",");
    for (let pair of arr) {
        let value = pair.split(":")[1]; // Get the second argument in the key value pair
        if (value.length > max) {
            max = value.length;
        }
    }
    return max;
}

const str = "111:56,47:12496,abcd:aca"
let max = return_max(str);
console.log(max);