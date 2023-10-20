class Data {
dia = 1
mes = 1
ano = 1970
}

const d1 = new Data()
d1.dia = 21
d1.mes= 3
d1.ano = 2012

console.log(d1)

const d2 = new Data(1, 2, 2032)

console.log(d2) // perceba que eu passei os valores mais não foi, pq? Pois é necessário eu construir dentro da classe um lugar para colocar parâmetros

class Data1 {
    dia = 1
    mes = 1
    ano = 1970

    constructor(dia, mes, ano) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    exibir() {
        return  `A sua data corresponde ${this.dia}/${this.mes}/${this.ano}`
    }
    }

const d3 = new Data1 (1, 10, 2032)
console.log(d3)


// Perceba que agora deu certo, é como se eu tivesse construido um lugar dentro da classe para incorporar os parâmetros