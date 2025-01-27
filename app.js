/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
const buttons = document.querySelectorAll('.row');
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');
const decimalButton = document.querySelector('.decimal');
let operator = null;
let firstOperand = null;
let secondOperand = null;
let currentInput = null;
let result = null;

function clearCalculator() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    secondOperand = null;
    result = null;
    updateDisplay('');
}

function updateDisplay(value) {
    display.textContent = value || '';
}

function calculateResult() {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    if ( operator === null || firstOperand === null || secondOperand === null ) {
        return;

    }  if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else if (operator === '/') {
            result = num1 / num2;
        }
    }

function handleNumberClick(value) {
    currentInput += value;
    updateDisplay(currentInput);
}

function handleOperatorClick(value) {
    if (firstOperand === null) {
        firstOperand = currentInput;
        operator = value;
        currentInput = '';
    }
}

function handleEqualClick() {
    secondOperand = currentInput;
    calculateResult();
    updateDisplay(result);
    currentInput = result;
    firstOperand = result;
    operator = null;
}

function handleButtonClick(event) {
    const value = event.target.textContent;

    if (event.target.classList.contains('number')) {
        handleNumberClick(value);
    } else if (event.target.classList.contains('operator')) {
        handleOperatorClick(value);
    } else if (event.target.classList.contains('equal')) {
        handleEqualClick();
    } else if (event.target.classList.contains('clear')) {
        clearCalculator();
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick ) });

  /*calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);
  
    // Example
    if (event.target.classList.contains('number')) {
      // Do something with a number
    }
  
    // Example
    if (event.target.innerText === '*') {
      // Do something with this operator
    }
  });






    