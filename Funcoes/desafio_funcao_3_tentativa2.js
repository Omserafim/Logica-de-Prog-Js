const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

function notasMaiores (n1, n2) {
    return n1 >= n2 ? n1 : n2;
   
}

console.log(notasMaiores(nota1, nota2), notasMaiores(nota2, nota3))

function mediaNotas(n1, n2, n3) {
   return (notasMaiores (n1, n2) + notasMaiores(n2, n3)) /2
  
}

console.log(mediaNotas(nota1, nota2, nota3))

function conversao (fn) {
    if (fn >= 7) {
        return "Aprovado"
    } else if (fn >= 4) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }

}

console.log(`O resultado do aluno é ${conversao(mediaNotas(nota1, nota2, nota3))}`)

// Ou eu armazeno esse resultado em uma variavel e só chamo a variavel

let conversaoFinal = conversao(mediaNotas(nota1, nota2, nota3))

console.log(`O resultado do aluno é ${conversaoFinal}`)




