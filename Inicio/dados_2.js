var preco = 19.9;
// Esse desconto é a % ou seja 50% de desconto
let desconto = 0.4;

console.log(preco * (1 - desconto))

var precoDesconto = preco * (1 - desconto);
console.log(precoDesconto)

var nomeProduto = "caderno";
var categoriaProduto = "papelaria";

console.log("A categoria do", nomeProduto, "é",
    categoriaProduto + ", e seu preço é de " + preco +
    ", e com desconto é de " + precoDesconto)

    // o "+" é utilizado para concatenar ou seja juntar palavras, portanto posso utiliza-lo para formar frase como o exemplo acima
    // String eu utilizo as "" e Int eu não utilizo nada apenas o numero em si

// Exemplo para treino
let monTotal = 10000000;
let juros = 0.01;

const montFinal = monTotal * (1 + juros)

console.log(montFinal)