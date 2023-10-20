function retornaUmaFuncao () {

    function bomDia() {
        return "Bom dia!"
    }

    return bomDia;
}

console.log(retornaUmaFuncao) // Aqui eu mandei exibir a própria função
console.log(retornaUmaFuncao()) // Aqui eu invoquei a função, e pergunto o que tem dentro da função retornaUmaFuncao? O retorno da incoação da função bomDia
console.log(retornaUmaFuncao()()) /*/ Perceba que aqui eu invoquei a função retornar e invoquei o que tem dentro do retorno da função retornar, 
é Bom dia ! */ 