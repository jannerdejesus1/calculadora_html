const num1 = document.getElementById('sec-n1');
const operador = document.getElementById('sec-op');
const num2 = document.getElementById('sec-n2');
const resultado = document.getElementById('res');

let fase = 1;

function calcular() {
    const v1 = parseFloat(num1.value);
    const v2 = parseFloat(num2.value);
    const signo = operador.value.trim();

    if (isNaN(v1) || isNaN(v2) || signo === "") return;

    let total = 0;

    if (signo == '+') {
        total = v1 + v2;
    } 
    else if (signo == '-') {
        total = v1 - v2;
    }
    else if (signo == '*') {
        total = v1 * v2;
    }
    else if (signo == '/') {
        total = v2 !== 0 ? v1 / v2 : "Error";
    }
    else {
        total = "???";
    }

    resultado.value = total;
}

function addNum(n) {
    if (fase === 1) {
        if (n === '.' && num1.value.includes('.')) return;
        num1.value += n;
    } else {
        if (n === '.' && num2.value.includes('.')) return;
        num2.value += n;
    }
}

function setOp(op) {
    if (num1.value === "") return; 
    operador.value = op;
    fase = 2; 
}

function ejecutar() {
    calcular();
}

function limpiar() {
    num1.value = "";
    num2.value = "";
    operador.value = "";
    resultado.value = "0";
    fase = 1;
}

function borrar() {
    if (fase === 1) {
        num1.value = num1.value.slice(0, -1);
    } else {
        if (num2.value === "") {
            fase = 1;
            operador.value = "";
        } else {
            num2.value = num2.value.slice(0, -1);
        }
    }
}