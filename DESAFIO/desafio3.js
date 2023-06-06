const leia = require("prompt-sync")();

let numero

numero = parseInt(leia("Digite um numero inteiro positivo: "))

for(let x=1; x <= numero; x++) {
    if (x % 2 == 0) {
        console.log(x)
    }
}