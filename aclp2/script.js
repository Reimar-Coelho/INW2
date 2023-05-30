const leia = require("prompt-sync")();

class ProdutoAutopecas {
    constructor (id, descricao, ativo, estoque, preco, marca, localEncaixe) {
        this.id=id;
        this.descricao=descricao;
        this.ativo=ativo;
        this.estoque=estoque;
        this.preco=preco;
        this.marca=marca;
        this.localEncaixe=localEncaixe;
    }

    ativar() {
        this.ativo=true
    }

    retirarEstoque(quantidade) {
        if (this.ativo) {
            if (quantidade <0) {
                console.log("Impossível, valor negativo...")
            }
            else if (quantidade==0) {
                console.log("Impossível, valor zerado...")
            }
            else if (quantidade>this.estoque) {
                console.log("Impossível, estoque vazio")
            }
            else {
                this.estoque += quantidade
            }
        }
        else {
            console.log("Inativa...");
        }
    }

    incluirEstoque(quantidade) {
        if (this.ativo) {
            if (quantidade <0) {
                console.log("Impossível, valor negativo...")
            }
            else if (quantidade==0) {
                console.log("Impossível, valor zerado...")
            }
            else {
                this.estoque += quantidade
            }
        }
        else {
            console.log("Inativa...");
        }
    }
}

console.log("Maluquice autopeças\n");
console.log("A sua loucura por qualidade e variedade!\n");

const querComprar = leia(
    "Deseja fazer compras? S/N: "
);

if (querComprar == "S") {
    console.log("Cadastro inicial do produto");

    let id = parseInt(leia("Digite o id do produto: "));
    let descricao = leia("Digite a descrição do produto: ");
    let preco = parseFloat(leia("Digite o valor unitário do produto: "));
    let marca = leia("Digite a marca do produto: ");
    let localEncaixe = leia("Qual o local de encaixe da peça no veículo: ")

    console.log("Produto cadastrado!")

    let produto1 = new ProdutoAutopecas(id, descricao, preco, marca, localEncaixe)

    for (let x = 1; x <= 5; x++) {
        console.log("Venda: "+x);
        console.log("Produto: "+id);
        console.log("Descrição: "+descricao);
        console.log("Estoque atual: "+estoque);

        let quantidade = parseInt(leia("Quantos produtos deseja comprar? "));
        let valorCompra = quantidade*preco;
        
        console.log("Valor a pagar: "+valorCompra);

        produto1.retirarEstoque(quantidade);
    }
}
else {
    console.log("Até breve!")
}

