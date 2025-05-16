function clearCalculator() {
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        document.getElementById("result").textContent = "Result:";
    }
function clearHistory() {
    document.getElementById("history").innerHTML = "";
}

function calculate(operator) {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    a = parseFloat(a);
    b = parseFloat(b);

    if(isNaN(a) || isNaN(b)) {
        document.getElementById("result").textContent = "Please enter two numbers."
        return; 
    }

    let result;
    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        if (b === 0) {
            result = "Error: division by zero";
        } else {
            result = a / b;
        }
    } else {
        result = "Error: Unknown operation";
    }

    document.getElementById("result").textContent = "Result: " + result;

    document.getElementById("history").innerHTML += `<div>${a} ${operator} ${b} =  ${result}</div>`;
}


