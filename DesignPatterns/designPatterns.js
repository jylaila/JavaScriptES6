//Factory - pode ser chamado sem o new
function Pessoa2() {
  return {
    name: "Janaina",
    cargo: "Professora",
  };
}

//factory
const prof = Pessoa2();

//posso passar atributos
function Pessoa2(name) {
  return {
    name,
    cargo: "Professora",
  };
}

//factory
const prof = Pessoa2();

//posso usar spread
function Pessoa2(Minhaspropiedades) {
  return {
    name: " ",
    cargo: "Professora",
    ...Minhaspropiedades,
  };
}

//factory
const prof = Pessoa2({ escolaridade: "Mestrado" });
console.log(prof);

//equivalente
function Pessoa() {
  this.name = "Janaina";
  this.cargo = "Professora";
}

//não é factory
const prof = new Pessoa();
