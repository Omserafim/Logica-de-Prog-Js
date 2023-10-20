const nota = 9;
const bomComportamento = true;

if (nota >= 7.5 && bomComportamento)
    console.log("O aluno está aprovado")

if (nota == 7 && bomComportamento)
    console.log("O aluno está aprovado, por bom comportamento")

if (nota <= 6.9 || !bomComportamento) // essa expressão quer dizer se o aluno tirou menos que 6.9 OU representado pelo || !(NOT)bomComportamento
    console.log("O aluno está reprovado")