const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/livros', 
{useNewUrlParser : true, useUnifiedTopology: true, serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', function(){
    console.log("Estamos logados no mongodb");
});

const produtosSchema = new mongoose.Schema ({
    nome: String,
    preco: Number,
    tipo: String
})

const Produto = mongoose.model("Produto", produtosSchema);

const produto = new Produto ({
    nome: 'Navio do Vasco',
    preco: 2500.00,
    tipo: 'entretenimento'
})

console.log(produto.nome)
console.log(produto.preco)
console.log(produto.tipo)

produto.save();