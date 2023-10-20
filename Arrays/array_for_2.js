const notas = [7, 8, 6, 7, 8, 10, 8, 7]

// Para percorrer todo os array sem necessariamente eu criar uma variavel de controle


// Essa expressão foi para percorrer todos os valores definidos
for (let nota of notas) {
   console.log(nota)
}


// Essa expressão foi para percorrer todos on indices


for (let indice in notas) {
   console.log(indice) }


// Refazendo 

const notas2 = [7, 8, 9, 10, 5]

for (let nota2 of notas2) {
   let linha = "   "
   linha += nota2 + " "
   console.log(linha)
}

