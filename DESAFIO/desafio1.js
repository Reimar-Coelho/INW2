const leia = require("prompt-sync")();

let nomeUsuario = leia ("Digite seu nome de usuário: ");
let salario = parseFloat(leia ("Digite seu salário: "));
let imposto = 0;

if (salario <= 2500) {
    console.log(nomeUsuario+ ", você está isento de imposto, assim seu salário líquido é de R$"+(salario-imposto))
}
else if (salario <= 5000 && salario > 2500) {
    imposto = salario*0.15
    console.log(nomeUsuario+", seu salário é igual a R$" +salario+ " e você deve pagar 15% ou R$" +imposto+ " de imposto, assim seu salário líquido é de R$"+(salario-imposto))
}
else {
    imposto = salario*0.25
    console.log(nomeUsuario+ ", seu salário é igual a R$" +salario+ " e você deve pagar 25% ou R$" +imposto+ " de imposto, assim seu salário líquido é de R$"+(salario-imposto))
}



