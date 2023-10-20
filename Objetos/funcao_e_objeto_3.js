// Função Construtora -> Objeto
function Data(dia =1 , mes =2 , ano= 2021) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
}

const d1 = new Data()
const d2 = new Data(20, 10, 2023)
const d3 = new Data(10, 3, 2032)

console.log(typeof d1)

console.log(d1)
console.log(d2)
console.log(d3)




// Perceba que nesse caso eu estou construindo a função novamente, utilizando-se dos atributos e alterando os parâmetros

class Produto {
    nome = ""
    custo = 0
    precoFinal = 0

    constructor (nome, custo, precoFinal) {
        this.nome = nome,
        this.custo = custo
        this.precoFinal = custo * precoFinal
    }
    exibir () {
        return `${this.nome}, ${this.custo}, ${this.precoFinal}`
    }
}

const p1 = new Produto("Lapis", 3, 2)
console.log(p1.exibir())