let operacion = '';
let num1 = '';
let num2 = '';

function agregarNumero(num) {
    document.getElementById('resultado').value += num;
}

function operar(op) {
    if (num1 === '') {
        num1 = document.getElementById('resultado').value;
        operacion = op;
        document.getElementById('resultado').value += ' ' + operacion + ' '; // Agrega el operador al display
    }
}

function calcularResultado() {
    num2 = document.getElementById('resultado').value.split(' ').pop(); // Obtiene el último número después del operador
    let resultado;

    if (num1 !== '' && num2 !== '') {
        switch (operacion) {
            case '+':
                resultado = parseFloat(num1) + parseFloat(num2);
                break;
            case '-':
                resultado = parseFloat(num1) - parseFloat(num2);
                break;
            case '*':
                resultado = parseFloat(num1) * parseFloat(num2);
                break;
            case '/':
                if (num2 !== '0') {
                    resultado = parseFloat(num1) / parseFloat(num2);
                } else {
                    alert("No se puede dividir por cero.");
                    return;
                }
                break;
            default:
                return;
        }
        document.getElementById('resultado').value = resultado;
        num1 = '';
        num2 = '';
        operacion = '';
    }
}

function limpiar() {
    document.getElementById('resultado').value = '';
    num1 = '';
    num2 = '';
    operacion = '';
}
