class Carro {
  constructor(portas) {
    this.portas = portas;
  }
  ligar() {}
}

class Popular extends Carro {
  //herança
  constructor(motor) {
    super(4); //construtor classe pai
    this.motor = motor;
  }
  buzinar() {
    console.log("Fom Fom");
  }
}

const monsa = new Popular(1.8);
console.log(monsa);
