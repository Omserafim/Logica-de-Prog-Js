/* #
   ##
   ###
   ####
   #####
   ###### */

   // Desafio é criar um laço for que exiba a imagem acima, sem utiliza numeros.

   // Desafio concluido utilizando numeros, para mostrar como seria a ideia

/*   let linha = ""

   for (let i = 1; i <= 6; i++) {
    linha+= "#"
    console.log(linha)
   } */


for (let o = "#"; o <= "######"; o += "#") {
    console.log(o)
}
// Nesse caso não dá para utilizar o operador unário "Variavel++", pois se trata de uma string.
// Resolução: Minha ideia foi a seguinte, declarar a variavel como #, criar um laço até ######, e ir incrementando + # até dar as ######

