let a = 1;
let b = 2;


console.log(++a == b++) /* Essa expressão da verdadeiro, mas pq? Pq a prioridade na execução do código, o ++a ou seja 
o pre fixado tem prioridade no posfixado b++.
Nesse code primeiro é executado a operação ++a depois é feita a comparação por isso o resultado é true e só após é feita a operação de incremento
de b++
Além disso podemos dizer que esse código é confuso pois precisa entender as precedencia para entender o pq da resposta
*/
 
console.log(++a == ++b) /* Nesse exemplo percebemos que ambos o código pre fixado tem precedencia sobre a "==", logo a resposta é false
pois primeiro é feito a operação de incremento em ambas a variaveis e depois a comparação.
*/