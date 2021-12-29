//como era...
function Pessoa(nome) {
  let nome = nome;

  this.getName = function () {
    return nome;
  };

  this.setName = function (novoNome) {
    this.nome = novoNome;
  };
}

const aluno = new Pessoa("Cindy");

aluno.setName("Cindy Fe");

//nova versão 12 do JS usa o # para modificar acesso aos atributos
class Pessoa {
  #nome = ""; //atributo privado

  constructor(nome) {
    this.#nome = nome;
  }

  getName() {
    return this.#nome;
  }

  setName(novoNome) {
    this.#nome = novoNome;
  }
}

const aluno = new Pessoa("Cindy");

aluno.setName("Cindy Fe");

//get e set versão 12
class Pessoa {
  #nome = ""; //atributo privado

  constructor(nome) {
    this.#nome = nome;
  }

  get nome() {
    return this.#nome;
  }

  set nome(novoNome) {
    this.#nome = novoNome;
  }
}

const aluna = new Pessoa("Cindy");
console.log(aluna.nome);
aluna.nome = "Cindy F";
console.log(aluna.nome);
