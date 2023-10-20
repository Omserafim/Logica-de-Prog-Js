function criarData(dia, mes, ano) {
    return {
        dia, /*Perceba que do lado esquerdo, é a chave de um dos atributos do objeto, e o do lado direito corresponde ao valor desta
        e como é uma função e eu defini parâmetros, os valores são definidos a partir do que eu coloquei nos parâmetros. */
        mes,
        ano,
        exibir() {
            return `A sua data corresponde ${this.dia}/${this.mes}/${this.ano}`
        }
    }
}

console.log(criarData(1, 3, 2023).exibir())

// teste passando uma varíavel para a função.

const d = criarData(2, 9, 2022)

console.log(d.exibir())

