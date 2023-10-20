function soma1(a, b) {
    return a + b;
}

console.log(soma1(1, 2))

function somar2(a) {
    return function (b) {
        return a + b
    }
}

console.log(somar2(1)(2))
// Perceba que aqui eu invoquei a função somar2, colocando o parâmetro, e invoquei o que está dentro desta, colocando o outro parâmetro

// E qual a utilidade disso?

// Exemplo para um imposto

function calculoImposto(valorProduto) {
    return function comImposto(b = 1.3) {
        return function (c) {
            return (valorProduto * b) * c

        }
    }

}
console.log(calculoImposto(23)()(1.1))

// Posso armazenar o valor da function comImposto em uma constante e vai funcionar tbm, vejamos


function calculoImposto1 (valorProduto) {
    return function Imposto (valorImposto) {
        return function (c) {
            return (valorProduto * valorImposto) * c
        }
    }
}

const valorImposto = 1.3 

console.log(calculoImposto1(23)(valorImposto)(1.1))

// Perceba que aqui eu coloquei como parâmetro na função Imposto o valor armazenado na constante valorImposto.

function imposto3 (valorProduto) {
    return function calculoImposto (imposto) {
            return valorProduto * imposto 

        }
        
    } 

function acrescimo (imposto3) {
    return imposto3 * 1.1
}


console.log(acrescimo(imposto3(10)(1.2)))

