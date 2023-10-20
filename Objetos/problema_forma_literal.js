const data = {
    dia: 8,
    mes: 3,
    ano: 2023,
    exibir: function () {
        return `A sua data corresponde ${this.dia}/${this.mes}/${this.ano}`
    }
}

const data2 = {
    dia: 21,
    mes: 5,
    ano: 2023,
    exibir: function () {
        return `A sua data corresponde ${this.dia}/${this.mes}/${this.ano}`
    }
}

const data3 = {
    dia: 3,
    mes: 10,
    ano: 2023,
    exibir: function () {
        return `A sua data corresponde ${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(data.exibir())

// Perceba que a forma literal ocupa muitas linhas de código, logo, não vale a pena criar isso de forma literal