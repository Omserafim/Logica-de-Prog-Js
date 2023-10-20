let a = 1;
let b = "1";

console.log(a == b);
// Perceba que nesse caso por JS ser um linguagem de tipagem fraca, e esta operação é de uma comparação de conteudo a resposta é true

console.log(a === b);
// Nesse caso como utilizei === estou comparando estritamente, logo a resposta é false

console.log(a != b);
// Também existe a difença estrita
console.log(a !== b);
