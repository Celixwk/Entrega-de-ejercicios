const screen = document.querySelector('.calculator-screen');
let currentInput = '';  
let prevInput = '';     
let operation = '';     
let isResultDisplayed = false;  


function updateScreen() {
  screen.value = `${prevInput} ${operation} ${currentInput}`.trim();
}


const inputNumber = (number) => {
  if (isResultDisplayed) {
    currentInput = number;
    isResultDisplayed = false;  
  } else {
    currentInput += number;
  }
};


const inputOperator = (operator) => {
  if (prevInput === '') {
    prevInput = currentInput;
  } else if (currentInput !== '') {
    calculate();  
  }
  operation = operator;
  currentInput = '';
};


const calculate = () => {
  let result = 0;
  const prev = parseFloat(prevInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    case '%':
      result = prev * (current / 100);  
      break;
    default:
      return;
  }
  currentInput = result.toString();
  operation = '';
  prevInput = '';
  isResultDisplayed = true;  
};


const handlePercentage = () => {
  if (currentInput !== '') {
    currentInput = (parseFloat(currentInput) / 100).toString();
  } else if (prevInput !== '' && currentInput === '' && operation === '%') {
    currentInput = (parseFloat(prevInput) * (parseFloat(currentInput) / 100)).toString();
  }
  updateScreen();
};

const clearAll = () => {
  currentInput = '';
  prevInput = '';
  operation = '';
  isResultDisplayed = false;
  updateScreen();
};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.value;

    if (value === 'AC') {
      clearAll();
    } else if (['+', '-', '*', '/', '%'].includes(value)) {
      if (value === '%') {
        handlePercentage();
      } else {
        inputOperator(value);
      }
    } else if (value === '=') {
      calculate();
      updateScreen();
    } else if (value === '.') {
      if (!currentInput.includes('.')) {
        currentInput += value;
      }
    } else {
      inputNumber(value);
    }

    updateScreen();
  });
});
