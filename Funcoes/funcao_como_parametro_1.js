
function executar (parametro) {
    if (typeof parametro === "function")
    console.log(parametro())

}

function bomDia () {
    return "Bom dia"
}

executar(3)
executar(bomDia) 
executar(bomDia()) 


// Vou fazer outro exemplo

function teste () {
    return "teste"
}

executar (teste)

// Explicação de invocar ou não as funções

const x = bomDia // Aqui x é a função
const y = bomDia() // Aqui eu invoquei a função
// E quando eu vou imprimir

console.log(x()) // Aqui eu preciso invocar ela
console.log(y) // Aqui ela já esta invocada, portanto eu não preciso invoca-la

executar(bomDia) // Aqui da certo pq eu só passei a função, portanto foi uma function === function, e como isso é verdadeiro ela imprimi a função.
executar(bomDia()) /* Aqui dá erro pq no IF há uma comparação entre função e === function, como aqui eu já passei ela invocada foi "Bom dia"
=== "function" e como isso é falso, ela não imprimi. */
