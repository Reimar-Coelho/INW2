const leia = require("prompt-sync")();

let escolhaNumero = parseInt(leia("Digite um número entre 5 e 9: "))

if (escolhaNumero <= 4) {
    console.log("Você digitou um número abaixo de 5...")
}
else if (escolhaNumero >= 10) {
    console.log("Você digitou um número acima de 9...")
}
else {
    console.log(escolhaNumero)
    while (escolhaNumero < 100) {
        escolhaNumero = escolhaNumero * 3
        console.log(escolhaNumero)
    }
}