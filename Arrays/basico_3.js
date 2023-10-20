console.log(typeof console)
console.log(typeof console.log)

const numeros = [1, 2, 3,]
console.log(typeof numeros)

// Perceba que numeros é a msm coisa que o console, ou seja, um objeto e dentro desse objeto eu posso ter os metódos ou funções.

numeros.push(10,5) // Considerando que numeros é um objeto eu posso chamar metodos e no caso o método push é para adicionar elementos no array

console.log(numeros)
console.log(numeros.length) // esse método length é para mostra o numero de elementos dentro do array

console.log(numeros[1])

numeros[1] = 3

console.log(numeros[1])