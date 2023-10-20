// Crie um objeto do tipo data com 3 atributos (dia/mes/ano)
// E além disso, criar dentro desse objeto um método exibir

const data = {
    dia: 8,
    mes: 3,
    ano: 2023,
    exibir: function () {
        return `A sua data corresponde ${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(data.exibir())

data.dia = 21

console.log(data.exibir())
