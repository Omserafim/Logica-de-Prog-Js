/* Existem 3 turmas de 5 alunos, todos eles tem notas, some todas as notas e divida os valores, após atribua o ranking A, B, C
sendo A a melhor e C a pior, abaixo irá aparecer as notas das turmas */

const turma1 = [7, 8, 9.2, 4, 2.1]
const turma2 = [3, 7, 10, 4.5, 7.2]
const turma3 = [2.7, 7, 8.9, 4.5, 7.8]

// ________________________________________
function somaMedia(array) {
    let f = 0;
    for (let i of array) {
        f += i / array.length

    }
    return f
}


function media (a) {
    let aux = 0 
    for (let j of a) {
        aux += j 
    }
    return aux
}



function statusRanking(n1, n2, n3) {
    if (somaMedia(n1) > somaMedia(n2) && somaMedia(n1) > somaMedia(n3) && somaMedia(n2) > somaMedia(n3)) {
        return "Turma 1 é ranking A \nTurma 2 é ranking B \nTurma 3 é ranking C"
    } else if (somaMedia(n1) > somaMedia(n2) && somaMedia(n1) > somaMedia(n3) && somaMedia(n3) > somaMedia(n2)) {
        return "Turma 1 é ranking A \nTurma 3 é ranking B \nTurma 2 é ranking C"
    }
    else if (somaMedia(n2) > somaMedia(n1) && somaMedia(n2) > somaMedia(n3) && somaMedia(n1) > somaMedia(n3)) {
        return "Turma 2 é ranking A \nTurma 1 é ranking B \nTurma 3 é ranking C"
    }
    else if (somaMedia(n2) > somaMedia(n1) && somaMedia(n2) > somaMedia(n3) && somaMedia(n3) > somaMedia(n1)) {
        return "Turma 2 é ranking A \nTurma 3 é ranking B \nTurma 1 é ranking C"

    } else if (somaMedia(n3) > somaMedia(n1) && somaMedia(n3) > somaMedia(n2) && somaMedia(n1) > somaMedia(n2)) {
        return "Turma 3 é ranking A \nTurma 1 é ranking B \nTurma 2 é ranking C"}
        else (somaMedia(n3) > somaMedia(n1) && somaMedia(n3) > somaMedia(n2) && somaMedia(n2) > somaMedia(n1)) 
        return "Turma 3 é ranking A \nTurma 2 é ranking B \nTurma 1 é ranking C"
      
    
}

console.log(statusRanking(turma1, turma2, turma3))

    // ______________________________________________

    /*/ Desafio 2 - Faça uma função comparar 2 elementos com a estrutra de controle switch utilizando os operadores lógicos.
    caso */

    function compararar(a, b) {
        switch (a != b) {
            case true:
                return "Você acertou"
            case false:
                return "Você errou"
        }
    }



    /*/ Desafio 2 - Faça uma função comparar 4 elementos com a estrutra de controle if utilizando os operadores lógicos.
    caso */

    function comparar1(a, b, c, d) {
        if (a * b == c) {
            return "A"
        } else if (a < b && b + a == c) {
            return "B"
        } else if (a < b && b < c && c == d) {
            return "C"
        }
        else if (a < b && b < c || b < c) {
            return "D"
        } else if (a > b && b > c && c > d) {
            return "E"
        } else {
            return "Parábens"
        }
    }


    console.log(comparar1(3, 5, 1, 21))


