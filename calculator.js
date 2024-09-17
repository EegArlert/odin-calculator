
function operate(var1, var2, operation) {
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



function runCalculator(){
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if(button.className == "numerical" && num2 == null && operator == null){
                stringNum1 += button.innerText
                onGoing.innerText = stringNum1
                num1 = Number(stringNum1)
            }
            else if(button.className == "numerical" && num1 != null && operator != null){
                stringNum2 += button.innerText
                onGoing.innerText = stringNum1 + " " + operator + " " + stringNum2
                num2 = Number(stringNum2)

                //this doesn't display correctly
            }
            else if(button.className == "operator" && num1 != null){
                operator = button.innerText
                onGoing.innerText += " " + operator;

            }
            else if(button.className == "function"){
                if (button.id == "btn-clear"){
                    num1 = null
                    num2 = null
                }
                else if(button.id == "btn-enter"){
                    num1 = calculate(num1, num2, operator);
                    num2 = null
                    operator = null
                    result.innerText = num1
                    onGoing.innerText = num1                   
                }

            }
        })
    })

    

}

runCalculator();

   

function calculate(operand1, operand2, operator){
    if(operator == null || operand1 == null || operand2 == null){
        return null
    }   
    return operate(operand1, operand2, operator)
}

