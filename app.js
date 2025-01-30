/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
const buttons = document.querySelectorAll('.row');
//const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

let num1 = '';
let num2 = '';
let operator = '';
let result = null;

//add events to buttons
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const value = event.target.innerText;
      // This log is for testing purposes to verify we're getting the correct value

    // If it's a number 
    if (!isNaN(value)) {
         if (operator) {
             num2 += value;
             } else {
                 num1 += value;
                 } updateDisplay();
    }
    // If it's an operator 
    if (['+', '-', '*', '/'].includes(value)) { 
        if (num1 && !operator) { 
            operator = value;
         } 
         updateDisplay();
    }
    // If it's "=" 
    if (value === '=') { 
        calculateResult(); 
        updateDisplay(); 
    } 
    //If it's "C" (Clear) 
    if (value === 'C') { 
      clearCalculator(); 
      updateDisplay(); 
    } 
});
 }); 
 
 // Update the display 
 function updateDisplay() { 
    if (result != null){
        display.innerText = result;
    } else{
    display.innerText = num2 || operator || num1 || '0'; 
}
 }
 // Perform the calculation 
 function calculateResult() { 
    if (num1 && num2 && operator) {
         const n1 = parseFloat(num1); 
         const n2 = parseFloat(num2); 
         
         switch (operator) {
             case '+': 
             result = n1 + n2; 
             break; case '-': 
             result = n1 - n2; 
             break; 
             case '*':
             result = n1 * n2;
             break;
             case '/': 
             result = n2 === 0 ? 'Error' : n1 / n2;
              break; 
            } 
            
            // Save the result and reset other variables 
            num1 = result.toString(); 
            num2 = ''; 
            operator = ''; 
        } 
     } 
    // Clear the calculator 
    function clearCalculator() { 
        num1 = ''; 
        num2 = ''; 
        operator = ''; 
        result = null; 
    }
