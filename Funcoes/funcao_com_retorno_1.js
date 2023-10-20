function sempreRetornaUm () {
    return 1;
}

let valor = sempreRetornaUm() ;
console.log(valor)

function textoOuNumero (retornaTexto) {
    if (retornaTexto) {
        return "Sou um texto"
    } else {
        return 123;
    }
}

// Utilizando um operador ternario
function textoOuNumero (retornaTexto) { 
   return retornaTexto ? "retornaTexto": 123;
}


console.log(textoOuNumero (true))

/* Perceba que nesse caso eu criei uma condição, por isso meu parametro irá ser True ou False, e a partir do meu parametro ela irá retornar 
a definição que eu escolhi */