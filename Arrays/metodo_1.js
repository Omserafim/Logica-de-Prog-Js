const numeros = [1, 2, 3, 4, 5, 6, 8, 4];

numeros.push (8)
console.log(numeros.includes(3))
numeros.join(", ")
console.log(numeros.indexOf(4))
console.log(numeros.indexOf(4, 5)) // Nesse caso o próximo número a direita representa a "Busca do elemento a partir do indice 5"

console.log(numeros)

numeros.concat(7, 3) // Esse método cria um novo array
console.log(numeros) // Perceba que só concatenando não altera o array original 

const numeros2 = numeros.concat(7, 3)
console.log(numeros2) 