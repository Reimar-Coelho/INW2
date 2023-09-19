function escreverNoConsole(){
    console.log("Escrevendo na tela usando função!")
}

//execução da função
escreverNoConsole();

const textoNoConsole = function(){
    console.log("Segundo o exemplo, escrever no console");
}

textoNoConsole();

const textoPorParametro = function(texto){
    console.log(texto)
}
textoPorParametro("Terceiro exeplo, esse texto é o parametro!!!!")

const textoUsandoArrow = texto => console.log(texto)
textoUsandoArrow("QUarto exemplo usando arrow function")
// const textoUsandoArrow = texto =>{
//     console.log(texto)
// }
// textoUsandoArrow("QUarto exemplo usando arrow function") <--forma bruta

//função arroq que recebe um numero e mostra na tela o numero e diz se é par ou impar

const mostraParImpar = (numero) =>{
    if(numero<0){
        console.log(numero," o número é negativo")
    }
    else if(numero==0) {
        console.log(numero," o número digitado é negativo")
    }
    else if ((numero%2)==0){
        console.log(numero, "o número digitado é par")
    }
    else {
        console.log(" o número digitado é impar")
    }
}

mostraParImpar(1350)