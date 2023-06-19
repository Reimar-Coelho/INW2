const leia = require("prompt-sync")();

let codigos = ["P01", "P02", "P03", "P04"]
let produtos = ["Camisa", "Calça", "Saia", "Short"]
let precos = [0, 0, 0, 0]

for(let x = 0; x < precos.length; x++) {
    precos[x] = parseInt(leia("Digite quanto custa a "+produtos[x]+": "))
}

console.log("Codigo\tProduto\tPreço")
for(let i = 0; i < produtos.length; i++) {
    console.log(codigos[i]+'\t'+produtos[i]+'\t'+precos[i])
}