const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

// Tenho uma função que só pegue as 2 maiores notas,
// "O aluno estará aprovado se a nota for >=7"
// "O aluno estará em recuperação se a nota for >=4 e <=7"
// "O aluno estará reprovado se a nota for <=4"

function maiorNota (n1, n2) {
return n1 >= n2 ? n1 : n2;
}
console.log(maiorNota(nota1, nota2), maiorNota(nota2, nota3))



function media (n1, n2, n3) {
    const somaMaiorNota = (maiorNota(n1, n2) + maiorNota(n2, n3)) /2 
    return somaMaiorNota

}

console.log(media(nota1, nota2, nota3))

 function status (n1, n2, n3) {
    media (n1, n2, n3)
    if (media  >= 7) {
        return "Aprovado"
    } else if (media (n1, n2, n3) >= 4) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}

console.log(status(nota1, nota2, nota3))

const statusfinal = status(nota1, nota2, nota3)

console.log(`O status do aluno é ${statusfinal}!`)

