const i = 2;
const j = 3;

console.log("i = " + i + " + " + "j = " + j )

// utilizando o template string

console.log(`i = ${i} + j = ${j}`)
console.log(`i + j = ${i+j}`)
console.log (`Valor gerado = ${Math.random()}`)

console.log(" ")

// Lembrando que o template string só funciona quando eu envolver a string com crase, vejamos:

console.log ("Valor gerado = ${Math.random()}")
console.log (`Valor gerado = ${Math.random()}`)