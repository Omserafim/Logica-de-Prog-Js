//              0    1   2    3    4    5
const notas = [7.8, 6.7, 10, 9.5, 7.9, 5.8]
console.log(notas)
// Exibindo o elemento que quero através do indice
console.log(notas[2])

// Como eu aprendi o array é flexivel, vejamos como alterar o valor de um elemento através do indice

notas[3] = 8

console.log(notas[3])

// Perceba que eu alterei os dados mesmo sendo uma constante, como isso deu certo?

// O valor de notas em si não pode ser alterado, mas os elementos do array, sim, vejamos:

// notas = 3 esse code gera um erro

notas[3] = 8 // aqui eu modifico o valor de um elemento por um indice, não o valor da constante, por isso dá certo.

notas[4] = null

console.log(notas)