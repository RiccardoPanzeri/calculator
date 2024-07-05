//varibili globali:
let number1 = 0;
let number2 = 0;
let operator = "";
let displayValue = "";
let displayPar = document.querySelector("#displayPar");
let pad = document.querySelector("#padDiv"); 
//changeDisplayText("34 + 0 -12");














//funzioni per le operazioni basilari:
function add(num1, num2){
    return Number(num1) + Number(num2);
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 !== 0){
        return num1 / num2;
    }else{
        return "Error";
    }
}

function operate(operator, number1, number2){
    switch(operator){
        case "+":
            return add(number1, number2);
            break;
        case "-":
            return subtract(number1, number2);
            break;
        case "*":
            return multiply(number1, number2);
            break;
        case "/":
            return divide(number1, number2);
            break;
        default:
            return "Operator Error";
            break;        
    }

}

//funzione che modifica il contenuto del display:
function changeDisplayText(string){
   
   displayPar.textContent += string;
    
    

}


//eventListener:
