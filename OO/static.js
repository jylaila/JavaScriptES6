class Pessoa {
  //static permite acessar o método sem instanciar a classe
  static gritar() {
    console.log("AAAAAAAAA");
  }
}

console.log(Pessoa.gritar());

//equivalente
function Pessoa() {}
Pessoa.gritar = function () {
  console.log("AAAAAAAAA");
};
console.log(Pessoa.gritar());
