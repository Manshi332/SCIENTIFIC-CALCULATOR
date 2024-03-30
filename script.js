let string = "";
let shiftPressed = false; // Track the state of the Shift button
let buttons = document.querySelectorAll('.button');

// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

// Function to calculate trigonometric functions with degrees
function trigonometricFunctionWithDegrees(func, degrees) {
    // Convert degrees to radians
    const radians = degrees * (Math.PI / 180);
    // Calculate trigonometric function
    return func(radians);
}

// Button click event listener
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            // Check if the input string contains a trigonometric function followed by a number
            const match = string.match(/(sin|cos|tan)\s*(-?\d+(\.\d+)?)/i);
            if (match) {
                // Extract the trigonometric function and the number
                const func = match[1];
                const num = parseFloat(match[2]);
                // Calculate the result based on the function
                switch (func.toLowerCase()) {
                    case 'sin':
                        string = trigonometricFunctionWithDegrees(Math.sin, num);
                        break;
                    case 'cos':
                        string = trigonometricFunctionWithDegrees(Math.cos, num);
                        break;
                    case 'tan':
                        string = trigonometricFunctionWithDegrees(Math.tan, num);
                        break;
                    // Handle other trigonometric functions if needed
                    default:
                        // Handle unknown function
                        break;
                }
            } else {
                // Check if the input string contains factorial operation
                const matchFactorial = string.match(/(\d+)\!/);
                if (matchFactorial) {
                    const num = parseInt(matchFactorial[1]);
                    string = factorial(num);
                } else {
                    // Check if the input string contains ln operation
                    const matchLn = string.match(/ln\s*(-?\d+(\.\d+)?)/i);
                    if (matchLn) {
                        const num = parseFloat(matchLn[1]);
                        string = Math.log(num);
                    } else {
                        // Check if the input string contains log operation
                        const matchLog = string.match(/log\s*(-?\d+(\.\d+)?)/i);

                        if (matchLog) {
                            const num = parseFloat(matchLog[1]);
                            string = Math.log10(num);
                        } else {
                            // Check if the input string contains e^ operation
                            const matchExp = string.match(/e\^(-?\d+(\.\d+)?)/i);
                            if (matchExp) {
                                const num = parseFloat(matchExp[1]);
                                string = Math.exp(num);
                            } else {
                                // Check if the input string contains root operation
                                const matchsqrt = string.match(/sqrt\s*(-?\d+(\.\d+)?)/i);
                                if (matchsqrt) {
                                    const num = parseFloat(matchsqrt[1]);
                                    string = Math.sqrt(num);
                                } else {
                                    // Check if the input string contains power (^) operation
                                    const matchPower = string.match(/(-?\d+(\.\d+)?)\^(-?\d+(\.\d+)?)/);
                                    if (matchPower) {
                                        const base = parseFloat(matchPower[1]);
                                        const exponent = parseFloat(matchPower[3]);
                                        string = Math.pow(base, exponent);
                                    } else {
                                        // Evaluate the expression if no special operation is found
                                        string = eval(string);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == '%') {
            string = parseFloat(string) / 100;
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == '--') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'add') {
            // Toggle the state of Shift button
            shiftPressed = !shiftPressed; 
            // Update button labels accordingly
            const button1 = document.querySelector('.one');
            const button2 = document.querySelector('.two');
            const button3 = document.querySelector('.three');
            const button4 = document.querySelector('.four');
            const button5 = document.querySelector('.five');
            const button6 = document.querySelector('.six');
            const button7 = document.querySelector('.seven');
            const button8 = document.querySelector('.eight');
            const button9 = document.querySelector('.nine');

            if (shiftPressed) {
                button1.innerHTML = 'sin';
                button2.innerHTML = 'cos';
                button3.innerHTML = 'tan';
                button4.innerHTML = 'log ';
                button5.innerHTML = '!';
                button6.innerHTML = 'ln';
                button7.innerHTML = 'e^';
                button8.innerHTML = 'sqrt  ';
                button9.innerHTML = '^';
            } else {
                button1.innerHTML = '1';
                button2.innerHTML = '2';
                button3.innerHTML = '3';
                button4.innerHTML = '4';
                button5.innerHTML = '5';
                button6.innerHTML = '6';
                button7.innerHTML = '7';
                button8.innerHTML = '8';
                button9.innerHTML = '9';
            }
        } else {
            // Check if shift is pressed and handle calculations accordingly
            if (shiftPressed) {
                string += e.target.innerHTML;
            } else {
                string += e.target.innerHTML;
            }
            document.querySelector('input').value = string;
        }
    });
});
