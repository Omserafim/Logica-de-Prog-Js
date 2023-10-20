//Revisão ForEach

let number = [1, 2, 3, 4, 5]


number.push(1+6)

function contaArray (array) {
    array.forEach(function (el, ind, a) {
        console.log(ind, el, a) 
    });
}

contaArray (number)

// Revisão For

for (let i = 0; i < number.length; i++) {
    console.log(number[i])
}

for (let i of number) {
    console.log(i)
}

