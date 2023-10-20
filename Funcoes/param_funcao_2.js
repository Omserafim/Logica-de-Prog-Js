// Para eu deixar esse número funcionando, eu atribuo o valor dentro do parâmetro, e nesse caso é interessante virar 0.

function somar (a = 0, b = 0, c = 0, d = 0) {
    return a + b + c + d
}

console.log(somar(1, 2, 3, 4))
console.log(somar(1, 2, 3,))
console.log(somar(1, 2,))
console.log(somar(1,))
console.log(somar())

