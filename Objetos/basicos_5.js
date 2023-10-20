const cliente = {
    nome: "Ana",
    code: 1,
    endereço : {
        logradouro: "Rua abc",
        numero: 12,
        complemento: "Ap 102 Bloco B",
        pontosRef: [
            {nome: "Hospital Nossa Senhora", proximo: true},
            {nome: "Shopping X", proximo: false},
            {nome: "Praça Publica", proximo: false}
        ]
    },
    clienteVip: true,
    salario: function () {
       return bruto - descontos
    }


}

console.log(cliente)
console.log(cliente.nome)
console.log(cliente.endereço.numero)
console.log(cliente.endereço.pontosRef[2])

// Perceba que eu posso colocar array e objetos dentro do próprio objeto