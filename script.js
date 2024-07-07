//varibili globali:
let number1 = 0;
let number2 = 0;
let displayResult = false;
let negativeNumber = false;
let operator = "";
let displayValue = 0;
let displayDiv = document.querySelector("#displayDiv");
let displayPar = document.querySelector("#displayPar");
let pad = document.querySelector("#padDiv"); 
changeDisplayText("0");














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
        displayPar.textContent = "Error";
        number1 = 0;
        number2 = 0;
        operator = "";
        return "1";
       
    }
}

//funzione che recupera operandi e operatori:
function parseDisplay(){
    if(displayPar.textContent.at(0) === "-"){
       displayPar.textContent = displayPar.textContent.replace("-", "");
       console.log(displayPar.textContent);
       negativeNumber = true;
       operator = "";
    }
    const array = displayPar.textContent.split(operator);
    array[0].slice(-1);
    console.table(array);
    if(array[0] >= 9007199254740991 || array[1] >= 9007199254740991){
        displayPar.textContent = "Max Value Error";
        displayValue = 0;
        number1 = 0;
        number2 = 0;
        operator = "";
   
    }else{
        if(negativeNumber){
        number1 = Number(array[0] * (-1));
    }else{
        number1 = Number(array[0]);
    }
        number2 = Number(array[1]);
    }
    console.log(number1);
    
}

function operate(operator, number1, number2){
    if(displayPar.textContent === "Max Value Error"){
        return "1";
    }
    switch(operator){
        case "+":
            displayValue = add(number1, number2);
            return displayValue;
            break;
        case "-":
            displayValue = subtract(number1, number2);
            return displayValue;
            break;
        case "X":
            displayValue = multiply(number1, number2);
            return displayValue;
            break;
        case "÷":
            displayValue = divide(number1, number2);
            return displayValue;
            break;
        default:
            return "Operator Error";
            break;        
    }

}

//funzione che modifica il contenuto del display:
function changeDisplayText(string){
    if(displayResult && !(string === "+" || string === "X" || string === "-" || string === "÷") || displayPar.textContent === "Error" || displayPar.textContent === "Max Value Error"){
        displayPar.textContent = "";
    }
    displayResult = false;
    if(displayPar.textContent.length <= 20 && displayPar.textContent !=="0"){
   displayPar.textContent += string;
    }else if(displayPar.textContent === "0"){
        displayPar.textContent = string;
    }


    

}

//funzione che cancella
function eraseDisplayText(all){
    if(all === true){
        displayPar.textContent = "0";
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
            operator = "";
            number1 = 0;
            number2 = 0; 
            break;
        case "delete":
            if(displayPar.textContent.at(-1) === "+"||displayPar.textContent.at(-1) === "-"||
            displayPar.textContent.at(-1) === "X"||displayPar.textContent.at(-1) === "÷"){
                operator = "";
            }
            if(displayPar.textContent === "Error" || displayPar.textContent === "Max Value Error"){
                eraseDisplayText(true);
            }else{
                eraseDisplayText(false)

            }
            console.log("blah" + displayPar.textContent.at(-1));
            console.log(operator);
            break; 
        case "add":
            if(!(displayPar.textContent.at(-1) === "+"||displayPar.textContent.at(-1) === "-"||
            displayPar.textContent.at(-1) === "X"||displayPar.textContent.at(-1) === "÷") && operator !== ""){
            
            parseDisplay();
            eraseDisplayText(true);
            changeDisplayText(parseFloat(operate(operator, number1, number2).toFixed(2)));
            changeDisplayText("+");
            operator = "+";
            
            console.log(displayValue);
        }else if(displayPar.textContent.at(-1) === "+"||displayPar.textContent.at(-1) === "-"||
        displayPar.textContent.at(-1) === "X"||displayPar.textContent.at(-1) === "÷"){
            eraseDisplayText(false);
            changeDisplayText("+");
            operator = "+";
            
        }else{
            changeDisplayText("+");
            operator = "+";
            
        }
            break;    
        case "subtract":
            if(!(displayPar.textContent.at(-1) === "+"||displayPar.textContent.at(-1) === "-"||
            displayPar.textContent.at(-1) === "X"||displayPar.textContent.at(-1) === "÷") && operator !== ""){
            
            parseDisplay();
            eraseDisplayText(true);
            changeDisplayText(parseFloat(operate(operator, number1, number2).toFixed(2)));
            changeDisplayText("-");
                
                operator = "-";
                
            
            console.log(displayValue);
        }else if(displayPar.textContent.at(-1) === "+"||displayPar.textContent.at(-1) === "-"||
        displayPar.textContent.at(-1) === "X"||displayPar.textContent.at(-1) === "÷"){
            eraseDisplayText(false);
            changeDisplayText("-");
            operator = "-";
            
        }else{
            changeDisplayText("-");
            operator = "-";
            
            
        }
            break;  
        case "multiply":
            if(!(displayPar.textContent.at(-1) === "+"||displayPar.textContent.at(-1) === "-"||
            displayPar.textContent.at(-1) === "X"||displayPar.textContent.at(-1) === "÷") && operator !== ""){
            
            parseDisplay();
            eraseDisplayText(true);
            changeDisplayText(parseFloat(operate(operator, number1, number2).toFixed(2)));
            changeDisplayText("X");
            operator = "X";
            
            console.log(displayValue);
        }else if(displayPar.textContent.at(-1) === "+"||displayPar.textContent.at(-1) === "-"||
        displayPar.textContent.at(-1) === "X"||displayPar.textContent.at(-1) === "÷"){
            eraseDisplayText(false);
            changeDisplayText("X");
            operator = "X";
            
        }else{
            changeDisplayText("X");
            operator = "X";
            
        }
            break;  
        case "divide":
            if(!(displayPar.textContent.at(-1) === "+"||displayPar.textContent.at(-1) === "-"||
            displayPar.textContent.at(-1) === "X"||displayPar.textContent.at(-1) === "÷") && operator !== ""){
            
            parseDisplay();
            eraseDisplayText(true);
            changeDisplayText(parseFloat(operate(operator, number1, number2).toFixed(2)));
            changeDisplayText("÷");
            operator = "÷";
            
            console.log(displayValue);
        }else if(displayPar.textContent.at(-1) === "+"||displayPar.textContent.at(-1) === "-"||
        displayPar.textContent.at(-1) === "X"||displayPar.textContent.at(-1) === "÷"){
            eraseDisplayText(false);
            changeDisplayText("÷");
            operator = "÷";
            
        }else{
            changeDisplayText("÷");
            operator = "÷";
            
        }
            break; 
        case "equals":
            if(!displayResult && displayPar.textContent !== "Error" && operator !== "" && displayPar.textContent !== "Max Value Error"){
            parseDisplay();
            displayPar.textContent = parseFloat(operate(operator, number1, number2).toFixed(2));
            displayResult = true;
            console.log(Number(displayValue));
            operator = "";
            number1 = 0;
            number2 = 0;
            displayValue = 0;
            console.log(operator);
            
            
            }
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

pad.addEventListener("mouseout", (e)=>{
    let target = e.target;
    if(target.classList.contains("button")){
        target.style.backgroundImage = "url(./img/metallic1.jpg)";
    }
});