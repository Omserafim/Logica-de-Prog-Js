for (let i = 1; i <= 5; i++) {
    if (i === 2)
        break; // se o valor de i for estritamente igual a 2, irá chamar o break
    console.log(i)
}
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i)
}
