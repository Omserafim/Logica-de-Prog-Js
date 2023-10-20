function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function () {
            return `A sua data corresponde ${this.dia}/${this.mes}/${this.ano}`
        }
    }
}

console.log(criarData(1, 2, 2022).exibir())

// Perceba que agora eu tenho autonomia para definir as datas, e após definir os parâmetros eu chamo o método/função exibir para executar


function produtos (nome, custo, valorFinal) {
    return {
        a : nome,
        b : custo,
        c : valorFinal,
        exibir () {
            return `${this.a}, ${this.b}, ${this.c}`
        }
    }
}

console.log(produtos("caneta", 5.5, 8).exibir())