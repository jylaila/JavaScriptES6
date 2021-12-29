//Singleton sempre retorna a primeira instância, independente de quantas vezes for instanciado

function Carro(){
    if(!Carro.instance){
        Carro.instance = this;
    }
    return Carro.instance;
}

var monsa = Carro.call({motor: 1.8});

var monsa1 = Carro.call({motor: 1.6});

console.log(monsa); //{ motor: 1.8 }
console.log(monsa1);//{ motor: 1.8 }

