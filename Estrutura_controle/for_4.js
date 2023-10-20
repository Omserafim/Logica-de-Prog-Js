// [1, 1], [1, 2], [1, 3]
// [2, 1], [2, 2], [2, 3]
// [3, 1], [3, 2], [3, 3]

// Quero imprimir o code acima utilizando o laço "for"

for (let i = 1; i <= 3; i++) {
    let linha =" "; 
    for (let j = 1; j <= 3; j++) { 
        linha += `[${i}, ${j}] `
    }
    console.log(linha)
}

/*  Nesse code o que acontece, primeiro ele executo o externo 1 vez,
 após ele executa todo o interno, e somente quando acabar o interno ele volta para o externo */

 /* Por essa razão o i na primeira linha vale sempre 1, pois foi executado uma vez, e ele executa todo o "j", assim
  ele termina o j então [1, 1], [1, 2], [1, 3]. O J terminou. Após ele inicia o i novamente já incrementando o ++i que passa a valer 2
  executa todo o j novamente. Após terminar o j, ele inicia o i, incrementando mais 1 que passa a valer 3, e passa a executar o j dnv.
  Ou seja, o J é executado 9 vezes e o I 3 vezes, vez que o J está dentro do I */
  