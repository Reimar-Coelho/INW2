const leia = require("prompt-sync")();

let nome = leia("Digite seu nome: ")
let anoNascimento = parseInt(leia("Digite seu ano de nascimento: "))
let idade = 2023 - anoNascimento

if (idade <= 3) {
    console.log("Não atendemos bebês.")
}
else if (idade > 3 && idade <= 13) {
    console.log(nome+" - Faixa infantil.")
}
else if (idade > 13 && idade <= 17) {
    console.log(nome+" - Faixa adolescente.")
}
else if (idade > 17 && idade <= 65) {
    console.log(nome+" - Faixa adulta.")
}
else {
    console.log("Não atendemos idosos.")
}
