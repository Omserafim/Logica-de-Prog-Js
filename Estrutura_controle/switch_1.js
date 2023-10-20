let nota = 7.2

switch (Math.ceil(nota)) {
    case 8:
        console.log("Parábens você está aprovado")
        break;
    case 3:
        console.log("Você está reprovado")
        break;
    case 2:
        console.log("Você repetiu de ano")
}

//Perceba que eu coloquei ( Math.ceil (arredonda pra cima) nota) Ou seja, comandei para arredondar o valor variavel nota.
// caso esse arredondamento chegue a 9, irá exebir a mensagem abaixo.
// Perceba que não se tratava de uma expressão que avalia verdadeiro e falso, é so um comando.

// Contudo é necessário utilizar o break abaixo do case, pois, se eu não fizer isso o switch irá executar todos os comandos. Por bug msm


// a fim do código ficar mais organizado eu posso colocar todos os cases que eu quero em uma linha só e a mensagem de exibição abaixo.

let nota1 = 12

switch (Math.ceil(nota1)) {
    case 10: case 9: case 8: case 7: case 6:
        console.log("Parábens você está aprovado")
        break;
    case 5: case 4: case 3:
        console.log("Você está reprovado")
        break;
    case 2: case 1: case 0:
        console.log("Você repetiu de ano")
    default:
        console.log("Nota inválida")
}