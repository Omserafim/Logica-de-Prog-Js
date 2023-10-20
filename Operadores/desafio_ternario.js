const a = 9;
const b = 3;
const operacao = '/'; // Pode ser + - * /

const resultado = operacao == "+" ? a * b :
    operacao == "-" ? (a + 2) / b :
        operacao == "*" ? a - b :
            operacao == "/" ? a - 3 / b : a - b;
console.log(resultado)
