//permite organizar melhor o código, sem a necessidade de expor variáveis globais
// class Pessoa {
//   constructor(nome) {
//     this.nome = nome;
//   }
// }

// export default Pessoa;

// //como usar
// import Pessoa from './models/pessoa'

//Node
let nome = "default";

function getNome() {
  return nome;
}

function setNome(novoNome) {
  nome = novoNome;
}

module.exports = {
  setNome,
  getNome,
};
//para testar, veja o arquivo module-import.js
