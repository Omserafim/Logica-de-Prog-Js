// Função com parametros e sem retorno

function somar (a, b) {
    return a + b

}

console.log(somar (2, 4))

// Função com parametro e sem retorno

function exibirMultiplicao (a, b) {
    console.log(a * b)
}

// Função sem parametro e com retorno

function retornarDataAtual () {
    return new Date()
}

console.log(retornarDataAtual())

// Função sem parametro e sem retorno

function horaAtual () {
   console.log(new Date().getHours())

}

horaAtual()