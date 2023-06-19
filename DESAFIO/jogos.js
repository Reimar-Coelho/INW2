const leia = require("prompt-sync")();

let aluno1, aluno2
let nota1, nota2
aluno1 = leia("Digite o nome do aluno 1: ")
nota1 = parseFloat(leia("Digite a nota do aluno 1: "))

aluno2 = leia("Digite o nome do aluno 2: ")
nota2 = parseFloat(leia("Digite a nota do aluno 2: "))

if(nota<5) {
    console.log("Oi "+aluno1+" você está de recuperação")
}
else {
    console.log("Oi "+nota1+" você está aprovado")
}

if(nota<5) {
    console.log("Oi "+aluno2+" você está de recuperação")
}
else {
    console.log("Oi "+nota2+" você está aprovado")
}

