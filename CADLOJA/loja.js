const leia = require("prompt-sync")();

console.log("FamilyStore");
console.log("Sempre a disposição para melhor atendimento");

// Vetores
let cod = ["G1-1", "G1-2", "G1-3", "G1-4", "G1-5", "G1-6", "G1-7", "G1-8", "G1-9", "G1-10"];
let produtos = ["Boné             ", "Calça            ", "Bermuda Afro     ", "Bata             ", "Camisa Afro      ", "Saia Rodada      ", "Saia Style       ", "Macacão          ", "Camiseta tematica", "Calça social afro"];
let valor = [100.00, 150.00, 100.00, 150.00, 100.00, 150.00, 100.00, 150.00, 100.00, 150.00];
let estoque = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
let carrinho = [];

// Menu
let fazerCompra = leia("DESEJA FAZER COMPRAS S/N: ");

while (fazerCompra.toUpperCase() === "S") {
  console.log("RELAÇÃO DE PRODUTOS");
  console.log("COD\tPRODUTO\t\t\t\tVALOR R$\tESTOQUE");
  console.log("----------------------------------------------");
  for (let i = 0; i < cod.length; i++) {
    console.log(cod[i] + "\t" + produtos[i] + "\t\t" + valor[i].toFixed(2) + "\t\t" + estoque[i]);
  }
  console.log("----------------------------------------------");

  // Escolher item
  let escolha = leia("SELECIONE O CÓDIGO DO PRODUTO: ");

  let indiceProduto = cod.indexOf(escolha);
  if (indiceProduto !== -1) {
    let quantidade = parseInt(leia("DIGITE A QUANTIDADE NECESSÁRIA: "));
    if (quantidade <= estoque[indiceProduto]) {
      carrinho[indiceProduto] = quantidade;
      estoque[indiceProduto] -= quantidade;
      console.log("PRODUTO ADICIONADO AO CARRINHO.");

      console.log("CARRINHO DE COMPRAS");
      console.log("COD\tPRODUTO\t\t\t\tVALOR R$\tESTOQUE\t\tQTDE");
      console.log("-----------------------------------------------------------");
      for (let i = 0; i < cod.length; i++) {
        if (carrinho[i] > 0) {
          console.log(cod[i] + "\t" + produtos[i] + "\t\t" + valor[i].toFixed(2) + "\t\t" + estoque[i] + "\t\t" + carrinho[i]);
        }
      }
      console.log("-----------------------------------------------------------");
    } else {
      console.log("QUANTIDADE INSUFICIENTE NO ESTOQUE.");
    }
  } else {
    console.log("CÓDIGO DO PRODUTO INVÁLIDO.");
  }

  // Finalização
  fazerCompra = leia("CONTINUAR A COMPRA S/N: ");
}

console.log("Obrigado, volte sempre!");