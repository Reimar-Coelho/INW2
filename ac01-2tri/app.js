const url = "http://localhost:3000/produtos";
fetch(url)
  .then((req) => req.json())
  .then((data) => mostraProdutos(data));

function mostraProdutos(produtos) {
  const htmlProdutos = produtos.map(
    (produto) => `
 <div class="produtos">
  <img src=${produto.imagem} width=180 height=180><br>
  <h4 class="descricao">${produto.descricao}</h4>
  <h4 class="valor">Valor : ${produto.valor} R$</h4>
 </div>`
  );
  document.getElementById("app").innerHTML = htmlProdutos;
}
