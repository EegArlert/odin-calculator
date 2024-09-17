
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
let operator = null;
let nonOperator = null;
let ans = 0;

let buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const onGoing = document.querySelector(".on-going-request");



function runCalculator(){
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if(button.className == "numerical" && num1 == null){
                num1 = parseInt(button.innerText);
                onGoing.innerText = num1
            }
            else if(button.className == "numerical" && num2 == null && operator != null){
                num2 = parseInt(button.innerText);
                onGoing.innerText += " " + num2
            }
            else if(button.className == "operator" && num1 != null){
                operator = button.innerText
                onGoing.innerText += " " + operator
            }
            else if(button.className == "function"){
                if (button.id == "btn-clear"){
                    //empty out calculator
                }
                else if(button.id == "btn-enter"){
                    num1 = calculate(num1, num2, operator);
                    num2 = null
                    operator = null
                    result.innerText = num1
                    onGoing.innerText = ""                    
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
    ans = operate(operand1, operand2, operator)
    return ans;
}

