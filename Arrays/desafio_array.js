const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Desafio percorrer todos os array até começando do penultimo elemento de 2 em 2.



for (let p = 8; p >= 0; p = p -2) {
    console.log(numeros[p])
}

// Deu certo mas eu defini uma quantidade de numeros em específico para ficar mais flexivel eu preciso definir o a quantidade de números do array

for (let i = numeros.length - 2; i >= 0; i -= 2) {
    console.log(numeros[i])
}

// Desafio 2 percorrer todo o array começando do 2 número de 3 em 3.

const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 23, 56, 67, 21]

for (let i = 1; i <= numeros1.length; i += 3) {
    console.log (numeros1[i])
}

// Desafio 3 percorrer todo o array começando do antepenultimo número de 1 em 1

const numeros3 = [40, 60, 65, 54, 21, 54, 10, 23, 1]
for (let x = numeros3.length - 3; x >= 0; x = -1) {
    console.log(numeros3[x])
}

