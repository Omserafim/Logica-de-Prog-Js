// Criando função para esse code

const d1 = 3;
const m1 = 7
const a1 = 2021

function exibirData1() {

    console.log(`Dia: ${d1}\nMês: ${m1}\nAno: ${a1}`)

}

const d2 = 21;
const m2 = 10
const a2 = 2022 

function exibirData2() {

    console.log(`Dia: ${d2}\nMês: ${m2}\nAno: ${a2}`)
}

// Para chamar a função, basta eu escrever o nome da função, sem a necessidade do console.log

exibirData1()
console.log("")
exibirData2()
exibirData2()

// Nesse caso há a necessidade de escrever a função, pois dentro dela há um return e não um console.log
function exibirData3 (d, m, a) {
    return `Dia:${d} Mês:${m} Ano:${a}`
}

console.log(exibirData3(21, "Março", 2021))