/*
A + = 10
A = 9
B = 8 
B = 7
C+ = 6 
C = 5
D+ = 4
D = 3
E+ = 2
E = 1
F = 0
*/

// Desafio é fazer uma conversão de numero para o simbolo

let n = 9;
switch (n) { // Lembrando que no switch eu vou representar um string, ou um number, algo do tipo, mas nada que represente verdadeiro e falso, 
    // ou seja, não vou colocar uma expressão, e sim um dado que eu quero comparar com os cases.
    case 10: console.log("A+"); break;
    case 9: console.log("A"); break;
    case 8: console.log("B+"); break;
    case 7: console.log("B"); break;
    case 6: console.log("C+"); break;
    case 5: console.log("C"); break;
    case 4: console.log("D+"); break;
    case 3: console.log("D"); break;
    case 2: console.log("E+"); break;
    case 1: console.log("E"); break;
    case 0: console.log("F"); break;
    default:
        console.log("Número inválido")
}