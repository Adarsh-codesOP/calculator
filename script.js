function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculate() {
    let expression = document.getElementById("display").value;
    try {
        // Using eval() to evaluate the expression
        document.getElementById("display").value = eval(expression);
    } catch (error) {
        // In case of error, display 'Error' on the screen
        document.getElementById("display").value = 'Error';
    }
}