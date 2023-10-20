// Desafio é dar o somente o conceito extraido da tabela abaixo ao depender da nota //

/*
A = 9 E 10
B = 7 E 8,9
C = 5 E 6,9
D = 4,5 E 4,9
F = abaixo de 4,5
*/

const nota = 7;

if (nota >= 9)
    console.log("A")

if (nota >= 7 && nota <= 8.9)
    console.log("B")

if (nota >= 5 && nota <= 6.9)
    console.log("C")

if (nota >= 4.5 && nota <= 4.9)
    console.log("D")

if (nota < 4.5)
    console.log("F")

