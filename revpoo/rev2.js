const leia = require("prompt-sync")();

total = 0
qntdNum = 0
numero = 0
maiorNum = 0

while (numero > -1) {
    numero = parseInt(leia("Digite um número inteiro: "))
    total = numero+total
    qntdNum = qntdNum+1
    if (maiorNum < numero) {
        maiorNum = numero
    }
}
total = total - numero
qntdNum = qntdNum - 1
console.log("O total é "+total+". A quantidade de números digitados é "+qntdNum+". O maior número é "+maiorNum+".")


