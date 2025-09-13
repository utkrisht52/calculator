const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.value = '';
    } else if (value === '=') {
      try {
        currentInput = currentInput
          .replace(/÷/g, '/')
          .replace(/×/g, '*')
          .replace(/√/g, 'Math.sqrt');

        display.value = eval(currentInput);
        currentInput = display.value;
      } catch {
        display.value = 'Error';
        currentInput = '';
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  const validKeys = '0123456789+-*/.%()';
  if (validKeys.includes(e.key)) {
    currentInput += e.key;
    display.value = currentInput;
  } else if (e.key === 'Enter') {
    try {
      display.value = eval(currentInput);
      currentInput = display.value;
    } catch {
      display.value = 'Error';
      currentInput = '';
    }
  } else if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  }
});
