//criação de constantes
(() => {
  const teste = "Exemplo";
  console.log(`valor dentro da função ${teste}`);

  if (true) {
    const teste = "Valor do if";
    console.log(`valor dentro do if ${teste}`); //escopo de bloco da função
  }
  console.log(`valor após a execução do if ${teste}`); //imprime Exemplo
})();

//const tipos primitivos, não permite alterações
const nome = "Janaina";

name = "Universidade"; // erro

const user = {
  nome: "Janaina",
};

//se for objeto posso alterar o valor
user.nome = "Universidade";

//não podemos fazer o objeto apontar para outro lugar
user = {
  nome: "Universidade",
};

const pessoas = ["Janaina", "Cindy", "Taylor"];

//podemos adicionar novos itens
pessoas.push("Noah");

//podemos remover itens
pessoas.shift(); //remove primeiro elemento do array

//podemos alterar diretamente
pessoas[1] = "Cindy S";
