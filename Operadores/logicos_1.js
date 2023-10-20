let temDinheiro = true;
let estaEnsolarado = false;
let carroGaragem = false;

// OPERADOR AND
let resultadoAND = "Vai pro shopping? "
resultadoAND += temDinheiro && estaEnsolarado // Perceba que o operador lógico AND é representado por "&&"

console.log(resultadoAND)

// OPERADOR OR
let resultadoOR = "Vai pro shopping? "
resultadoOR += estaEnsolarado || carroGaragem; //// Perceba que o operador lógico OR é representado por "||"

console.log(resultadoOR)

// OPERADOR XOR
// Para achar em binário a operação XOR eu posso usar ^, para simular em true e false eu utilizo != 
console.log (true !== true)
console.log (true !== false)
console.log (false !== true)
console.log (false !== false)

// OPERADOR NOT
console.log ("Não verdadeiro: " + !true) //perceba que eu utilizo a exclamação na frente
console.log ("Não falso: " + !false)