let trabTerca = false;
let trabQuinta = false;

let tv50 = trabTerca && trabQuinta // AND
console.log("Vamos comprar a TV de 50'? " + (tv50)) 

let tv32 = trabTerca !== trabQuinta // XOR
console.log("Vamos comprar a TV de 32'? " + (tv32)) 

let sorvete = trabTerca || trabQuinta // OR
console.log("Vamos tomar sorvete? " + (sorvete))

let ficarCasa = !sorvete // NOT
console.log("Vamos ficar em casa? " + (ficarCasa)) 