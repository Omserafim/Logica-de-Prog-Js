/* / function exec (funcao) {
    if (typeof funcao === "function")
    return funcao()
}

// function somar (a, b) {
    return a + b
}

//console.log(exec (somar))

/* Perceba que nesse caso a funcao() foi passada sem parâmetros, e a função que eu invoquei, isto é somar(a, b) tem dois parâmetros, como não 
foi passado nenhum valor nos parâmetros, irá assumir o undefined, logo, a soma de qualquer número com undefined é NaN.
*/

function exec (funcao, n1, n2) { 
    if (typeof funcao === "function")
    return funcao(n1, n2) // Quando eu atribui valores para os meus parâmetros quando ele executa a função dá certo.
} // além disso eu posso passar parâmetros na função para colocar durante a invocação da outra função.

function somar (a, b) {
    return a + b
}
function subtrair (a, b) {
    return a - b
}
function multiplicar (a, b) {
return a * b
}
function dividir (a, b) {
return a / b
}

console.log(exec (somar, 30, 7))
console.log(exec (subtrair, 30, 7))
console.log(exec (multiplicar, 30, 7))
console.log(exec (dividir, 30, 7))

