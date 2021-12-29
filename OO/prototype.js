function Carro() {}

Carro.prototype.numPortas = 4;
Carro.prototype.correr = function () {};

function Popular(motor) {
  this.numPortas = 4;
  this.motor = motor;
}

Popular.prototype = Object.create(Carro);
Popular.prototype.buzinar = function () {
  console.log("Fom Fom");
};

const monsa = new Popular(1.8);
console.log(monsa);

//consigo alterar funcoes nativas com o prototype. Exemplo
String.prototype.split = function () {
  console.log("Teste!!!!");
};
"Taylor".split(""); // imprime Teste!!!!
