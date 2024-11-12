

let num1 = '';
let num2 = '';
let operator = '';

function appendNumber(number) {
    if (operator === '') {
        num1 += number;
        document.getElementById('display').value = num1;
    } else {
        num2 += number;
        document.getElementById('display').value = num1 + operator + num2;
    }
}

function setOperator(op) {
    if (num1 !== '') {
        operator = op;
        document.getElementById('display').value = num1 + operator;
    }
}

function calculate() {
    if (num1 !== '' && num2 !== '' && operator !== '') {
        let result;
        try {
            switch (operator) {
                case '+':
                    result = parseFloat(num1) + parseFloat(num2);
                    break;
                case '-':
                    result = parseFloat(num1) - parseFloat(num2);
                    break;
                case '*':
                    result = parseFloat(num1) * parseFloat(num2);
                    break;
                case '/':
                    result = parseFloat(num1) / parseFloat(num2);
                    break;
                case '%':
                    result = parseFloat(num1) % parseFloat(num2);
                    break;
                default:
                    result = 'Error';
            }
            document.getElementById('display').value = result;
            num1 = result;
            num2 = '';
            operator = '';
        } catch (e) {
            document.getElementById('display').value = 'Error';
        }
    }
}

function clearDisplay() {
    num1 = '';
    num2 = '';
    operator = '';
    document.getElementById('display').value = '';
}
