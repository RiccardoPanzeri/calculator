//varibili globali:
let number1 = 0;
let number2 = 0;
let operator = "";
let displayValue = "";
let displayDiv = document.querySelector("#displayDiv");
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
    if(displayPar.textContent.length <= 22){
   displayPar.textContent += string;
    }
    

}

//funzione che cancella
function eraseDisplayText(all){
    if(all === true){
        displayPar.textContent = "";
    }else{
        displayPar.textContent = displayPar.textContent.slice(0, -1);
    }
}


//eventListener:
padDiv.addEventListener("click", (e)=>{
    
        
    
    let target = e.target;
    switch(target.id){
        case "one":
            changeDisplayText("1");
            break;
        case "two":
            changeDisplayText("2");
            break;
        case "three":
            changeDisplayText("3");
            break;
        case "four":
            changeDisplayText("4");
            break;
        case "five":
            changeDisplayText("5");
            break;
        case "six": 
            changeDisplayText("6");
            break;
        case "seven":
            changeDisplayText("7");
            break;
        case "eight":
            changeDisplayText("8");
            break;
        case "nine":
            changeDisplayText("9");
            break;
        case "zero":
            changeDisplayText("0");      
            break;
        case "clear":
            eraseDisplayText(true);  
            break;
        case "delete":
            eraseDisplayText(false);
            break; 
        case "add":
            changeDisplayText("+");
            break;    
        case "subtract":
                changeDisplayText("-");
                break;
        case "multiply":
            changeDisplayText("X");
            break;
        case "divide":
            changeDisplayText("÷");
            break;
                                                   
    
}


});

pad.addEventListener("mousedown", (e)=>{
    let target = e.target;
    if(target.classList.contains("button")){
        target.style.backgroundImage = "url(./img/black-mental-background.jpg)";
    }
});

pad.addEventListener("mouseup", (e)=>{
    let target = e.target;
    if(target.classList.contains("button")){
        target.style.backgroundImage = "url(./img/metallic1.jpg)";
    }
});