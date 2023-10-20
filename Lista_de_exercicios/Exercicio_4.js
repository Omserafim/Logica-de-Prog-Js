function repetir(item, quantidade) {
    let resultado = []
    for (let i = 0; i < quantidade; i++)
    resultado.push(item)
    return resultado
    }

/* Exercicio 10 Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */





function simboloMais (a) {
    let r = " "
    for (let i = 0; i < a; i++)
    r += "+"
    return r
}
console.log(simboloMais(4))