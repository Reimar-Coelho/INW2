let aviao = {
    velocidade: 0,
    velocidadeMax: 800,
    ligado: false,
    tipo: "comercial",
    qntdPassageiros: 410,
    modelo: "boeng-747",

    liga: function(){
        this.ligado = true
        console.log("Ligando o avião")
    },

    desliga: function(){
        this.ligado = false
        if (this.velocidade > 0){
            console.log("Não é possível desligar o avião, ele ainda está andando")
        }
        else {
            console.log("Desligando o avião")
        }
    },

    acelerar: function(){
        if (this.ligado = true && this.velocidade < this.velocidadeMax) {
            this.velocidade += 10
            console.log("Acelerando")
        }
        else {
            console.log("O avião atingiu a velocidade máxima")
        }
        console.log("A velociade atual é de " +this.velocidade+ " km/h")
    },

    frear: function(){
        if (this.velocidade > 0) {
            this.velocidade -= 10
            console.log("Freando")
        }
        else {
            console.log("O avião já está parado, não é possível frear")
        }
        console.log("A velociade atual é de " +this.velocidade+ " km/h")
    },

    decolar: function () {
        if (this.velocidade >= 200 && this.ligado) {
            console.log("O avião está decolando")
        }
        else {
        console.log("Não foi possível decolar")
        }
    },

    pousar: function() {
        if (this.velocidade > 0) {
            console.log("Não foi possível pousar.")
        }
        else {
            console.log("Pousando")
        }
    },

    velocidadeCruzeiro: function() {
        if (this.velocidade >= 300 && this.velocidade <= 800){
            console.log("O avião está na velocidade de cruzeiro")
        }
        else {

        }
    }
}

aviao.liga();

for (let i = 0; i < 80; i++) {
    aviao.acelerar();
}
if (aviao.velocidade <= 200) {
    aviao.decolar();
}
aviao.pousar();
aviao.desliga();


