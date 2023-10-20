function semRetorno () {
    console.log("Função foi chamada!")
}

let a = 3 
let b = a * 7 + 10
let c = semRetorno ()

console.log(a, b, c)

// Perceba que ainda que haja uma frase na função como ela não retorna nada a sua saída é undefined, ou seja, você não definiu nada