const numeros = [1, 2, 3]

/* Percorrendo os array
for (let i = 0; i <numeros.length; i++) {
    console.log(numeros[i])
}

for (n of numeros) {
    console.log(n)
} */

numeros.forEach(function() {
    console.log("Dentro do foreach")
})

function paraCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array)
}

numeros.forEach(paraCadaElemento)

// Perceba que no forEach sempre o primeiro parâmetro corresponderá ao elemento e o segundo parâmetro ao indice e o terceiro será o array completo

// Portanto para ficar mais facil eu posso fazer o seguinte

numeros.forEach(function (el) {
    console.log(el)
}) // Neste aqui eu fiz uma função anonima que tem um parâmetro, logo isso corresponderá ao indice.


