// Criar duas expressões que vai resultar em TRUE envolvendo operadores Aritméticos/Relacionais/Lógicos
let academia = true;
let cardio = true + 700;
let comiBesteira = false + 300 * 2.5;
let resultadoCalorias = cardio > comiBesteira

let resultadoAtividade = "Realizei algum treino hoje? " + academia || cardio;
console.log (resultadoAtividade)
let resultadoEmagreci = "Perdi calorias hoje? " + resultadoCalorias
console.log(resultadoEmagreci)


// Criar duas expressões que vai resultar em TRUE envolvendo operadores Aritméticos/Relacionais/Lógicos

let cardio2 = false
let comiPorcaria = true + 500 
let comiBem = false - 300


let emagreci = "Eu perdi calorias hoje? " + (cardio2 && comiPorcaria)
console.log(emagreci)

let saudavel = "Minha alimentação foi saudável? " + (comiPorcaria <= comiBem)

console.log(saudavel)
