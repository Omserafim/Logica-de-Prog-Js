/* Exercicio 7 -  Crie uma função que receba três números como parâmetro (numero, minimo, maximo) e também um parâmetro booleano (inclusivo)
e retorne se o parâmetro numero (o primeiro parâmetro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja
informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a
maximo.
*/

function estaEntre (a, b, c, inclusivo = "false") {
    if (inclusivo) {
        return a >= b && a <= c
    } else {
        return a >= b && a < c
    }
    

}

console.log(estaEntre(1, 23, 100))

/* Exercicio 8 - Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação */

function mult (a, b) {
    let resultado = 0
    for(let i = 0; i < b; i++) {
        resultado +=a
    }
    return resultado
}
console.log(mult(5, 10))