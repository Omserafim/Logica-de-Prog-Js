// Criar uma função que vai receber um parametro (nota) --> Retornar um (conceito)

function notas(a) {
    switch (Math.ceil(a)) { // Nesse caso eu utilizei o Math.ceil para arredondar o valor do parametro para cima.
        case 10: return "A+"
        case 9: return "A"
        case 8: return "B+"
        case 7: return "B"
        case 6: return "C+"
        case 5: return "C"
        case 4: return "D+"
        case 3: return "D"
        case 2: return "E+"
        case 1: return "E"
        case 0: return "F"
        default: return null
    }
}

console.log(`A nota do aluno reflete ao conceito ${notas(8.4)}`)

// Perceba que nesse caso não foi necessário o "break", vez que o próprio return, já sai da função e não executa o código de baixo

// Desta feita o return só irá me retornar o parametro que eu escolhi.