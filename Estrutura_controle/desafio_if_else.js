const a = 10;
const b = 28;
const operacao = "*" // fazer esses numeros suportarem todas os operadores através do else if

let resultado;

if (operacao == "-")
    resultado = a * (b + 10);
else if (operacao == "+")
    resultado = a + 2 + b;
else if (operacao == "/")
    resultado = b / a;
else if (operacao == "%")
    resultado = b + 5 % a;
else
    resultado = a * b * 7;

console.log(resultado)