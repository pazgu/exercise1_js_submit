//Write a function in JS that receives a string with numbers separated by a comma and returns an array of the numbers. 
//For example for ""12,3,455"" an array with the numbers 12,3,455 will be returned

function return_arr(str) {
    return str.split(",")
}

let str = "12,3,455";
let new_str = return_arr(str);
console.log(new_str);