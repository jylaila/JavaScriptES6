function Carro(marca) {
  this.marca = marca; //crio atributo marca

  //crio o método buzinar
  this.buzinar = function () {
    console.log("Fom Fom");
  };
}

const monsa = new Carro("VW"); //instância

console.log(monsa.marca);

//obs, se a função tiver um return, o valor será retornado ao invocar, senão será retornado o objeto

//Herança
console.log(monsa.__proto__ === Carro.prototype); //true
console.log(Carro.__proto__ === Function.prototype); //true
