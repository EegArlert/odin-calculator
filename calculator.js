// console.log("hello world");

function add(var1, var2) {
    return var1 + var2;
}

function sub(var1, var2) {
    return var1 - var2;
}

function mult(var1, var2) {
    return var1 * var2;
}

function divd(var1, var2) {
    return var1 / var2;
}

function operate(operation, var1, var2) {
    if (operation == "add") {
        add(var1, var2)
    }
    else if (operation == "subtract") {
        sub(var1, var2)
    }
    else if (operation == "multiply") {
        mult(var1, var2)
    }
    else if (operation == "divide") {
        divd(var1, var2)
    }


}