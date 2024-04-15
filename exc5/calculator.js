
let result = '';

function display(value) {
    if (value === '×') {
        value = '*'; 
    } else if (value === '÷') {
        value = '/'; 
    }
    result += value;
    document.getElementById("result").value = result; 
}

function clearOutput() {
    result = ''; 
    document.getElementById("result").value = ''; 
}

function calculate() {
    let output = eval(result); 
    document.getElementById("result").value = output; 
}