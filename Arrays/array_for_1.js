const numeros = [1, 2, 3, 4, 5, 6, 8, 9]

for(let i = 0; i < 6; i++) {
    console.log(numeros[i])
}

/* Nesse exemplo eu utilizei a variavel "i" para representar os indices do array, contudo eu defini um valor de números e para deixar esse laço
mais flexivel, o que eu faço? Utilizo a função length que vai garantir que eu percorra todos os números do array
*/

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

// Importante entender que para utilizar a estrutura de controle for eu necessariamente preciso gerenciar os indices a partir de uma variavel.

// Existe uma forma mais simples de percorre todo o array.

// Refazendo a aula

const numeros2 = [5, 10, 20, 30]

for (let i = 0; i < numeros2.length; i += 1) {
    console.log(numeros2[i])
}