function retornaUmaFuncao () {
    return function () {
        return "Boa tarde!"
    }
}

console.log(retornaUmaFuncao)
console.log(retornaUmaFuncao())
// Perceba que aqui eu invoquei a função retornoUmaFuncao e seu conteudo tem uma função anonima, logo, aparece uma função anonima

console.log(retornaUmaFuncao()())
// Perceba que aqui eu invoquei a função retornoUmaFuncao e invoquei a funcao anonima que tem como retorno "Boa tarde!", aparecendo no console

