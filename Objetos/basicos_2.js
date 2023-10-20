const produto = {
    nome: "Ipad",
    preco: 5666,
    desconto: 0.15,
    precoComDesconto: function () {
        return this.preco - (this.preco * this.desconto)

    }
}

console.log(produto.precoComDesconto())

