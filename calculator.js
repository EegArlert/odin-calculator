function Operate(var1, var2, operation) {
    if (operation == "+") {
        return var1 + var2
    }
    else if (operation == "-") {
        return var1 - var2
    }
    else if (operation == "*") {
        return var1 * var2
    }
    else if (operation == "/") {
        return var1 / var2
    }
}

let num1 = null;
let num2 = null;
let stringNum1 = "";
let stringNum2 = "";
let operator = null;
let nonOperator = null;
let ans = 0;

let buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const onGoing = document.querySelector(".on-going-request");


function RunCalculator(){
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if(button.className == "numerical" && num2 == null && operator == null){
                stringNum1 += button.innerText
                onGoing.innerText = stringNum1
                num1 = parseFloat(stringNum1)
            }
            else if(button.className == "numerical" && num1 != null && operator != null){
                stringNum2 += button.innerText
                onGoing.innerText = num1 + " " + operator + " " + stringNum2
                num2 = parseFloat(stringNum2)
            }
            else if(button.className == "operator" && num1 != null){
                operator = button.innerText
                onGoing.innerText += " " + operator;
            }

            else if(button.id == "btn-decimal"){
                if(operator == null && stringNum1.includes(".") == false){
                    stringNum1 += button.innerText;
                    onGoing.innerText += button.innerText
                }
                else if(operator != null && stringNum2.includes(".") == false){
                    stringNum2 += button.innerText
                    onGoing.innerText += button.innerText
                }
            }

            else if(button.className == "function"){
                if (button.id == "btn-clear"){
                    ResetCalculator();
                }
                else if(button.id == "btn-enter"){
                    num1 = Calculate(num1, num2, operator);
                    num2 = null;
                    stringNum2 = "";
                    result.innerText = num1
                    onGoing.innerText = num1                   
                }

            }
        })
    })
}

RunCalculator();

function Calculate(operand1, operand2, operator){
    if(operator == null || operand1 == null || operand2 == null){
        return null
    }   
    return Operate(operand1, operand2, operator)
}


function ResetCalculator(){
    num1 = null;
    num2 = null;
    stringNum1 = "";
    stringNum2 = "";
    operator = null;
    result.innerText = 0;
    onGoing.innerText = "";
}