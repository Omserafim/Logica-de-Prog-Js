let x = 10;
x = 6;
x = x + 6;
x = x - 7;

let y= 20;
y = 10;

{
    let o = 8;
    o += 3;
    o *= 2
    o %=3

    console.log(o)
}

console.log(x)
console.log(y)

// Contexto de atribuição com string

{
    let nome = "Otávio"
    nome += " Maziero Serafim" // percebe que aqui há uma concatenação do texto

    console.log(nome)
}