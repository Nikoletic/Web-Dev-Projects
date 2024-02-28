const initBufferValue = "0";
let buffer = initBufferValue;
let runningTotal = 0;
let previousOperator = null;
const plus = "+";
const minus = "-";
const times = "*";
const divide = "/";
const backspace = '←';
const equals = '=';
const clear = "C";
const screen = document.querySelector('.screen');


function buttonClick(value) {
    if (value!="." && isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
}

function handleNumber(number) {
    if (buffer === initBufferValue && number != ".") {
        buffer = number;
    } else {
        buffer += number;
    }
}

function handleMath(value) {
    if (buffer === initBufferValue) {
        return;
    }
    const intBuffer = parseFloat(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = value;
    buffer = initBufferValue;
}


function flushOperation(intBuffer) {
    if (previousOperator === plus) {
        runningTotal += intBuffer
    } else if (previousOperator === minus) {
        runningTotal -= intBuffer
    } else if (previousOperator === times) {
        runningTotal *= intBuffer
    } else if (previousOperator === divide) {
        runningTotal /= intBuffer;
    }
}



function handleSymbol(symbol) {
    switch (symbol) {
        case clear:
            buffer = initBufferValue;
            break;
        case equals:
            if (previousOperator === null) {
                conolse.log("Buffer",buffer)
                return;
            }
            console.log("running total: " + runningTotal);

            flushOperation(parseInt(buffer));
            console.log("running total after flush: " + runningTotal);
            previousOperator = null;
            buffer = "" + runningTotal;
            runningTotal = 0;
            break;
        case backspace:
            if (buffer.length === 1) {
                buffer = initBufferValue;
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case plus:
        case minus:
        case times:
        case divide:
            handleMath(symbol);
            break;
    }
}


function init() {

    // 1. Add event listeners to the buttons
    document
        .querySelector('.calc-buttons')
        .addEventListener("click", function (event) {
            buttonClick(event.target.innerText);
            document.activeElement.blur();
        });
    // 2. Add event listeners to the keyboard 
    document
        .addEventListener("keydown", function (event) {
            let key = event.key;
            let code = event.code;
         
          //Check if the key is a number or a symbol from numpad of digit keys
            if (code.includes("Numpad")||code.includes("Digit")||code.includes("Enter")||code.includes("Backspace")||code.includes("Delete")) {
                if (key === "Enter") {
                    key = equals;
                }
                if(key==="Backspace"){
                    key=backspace;
                }
                if(key==="Delete"){
                    key=clear;
                }
                if(key==="/"){
                    key=divide;
                }
                buttonClick(key);
                //Added blur to defocus the button after pressing
                document.activeElement.blur();
            }

        });


}

function rerender() {
    console.log("buffer: " + buffer)
    screen.innerText = buffer;
    console.log("Screen: " + screen.innerText);
}

init();