/* Exercício 1-
Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.*/

function cumprimentar (a) {
    return "Olá, " + a + "!"
}

console.log(cumprimentar("Otávio"))

// Exercicio 2 -  Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

function converterIdade (a) {
   return a = a * 365

}

console.log(converterIdade(23))

/* Exercicio 3 - Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês. */

function retornaSalario (a, b) {
    let x = a * b ;
    return `Salário igual a R$${x}!`
}

console.log(retornaSalario(150, 40.5))

/* Exercicio 4 - Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente  como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.*/

function numeroParaMes (a) {
    switch (a) {
        case 1: return "Janeiro"
        case 2: return "Fevereiro"
        case 3: return "Março"
        case 4: return "Abril"
        case 5: return "Maio"
        case 6: return "Junho"
        case 7: return "Julho"
        case 8: return "Agosto"
        case 9: return "Setembro"
        case 10: return "Outubro"
        case 11: return "Novembro"
        case 12: return "Dezembro"
        default: return "Número Inválido"
    }
}

console.log(numeroParaMes(12))

// Exercicio 5 - Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function numeros (a, b) {
    if (a === b) {
        return true
    } else {
        return false
    }
}

console.log(numeros(1, 2))