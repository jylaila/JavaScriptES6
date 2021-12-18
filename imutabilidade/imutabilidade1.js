const funcionario = {
  nome: "Janaina",
  cargo: "Professora",
};

//passagem de parâmetros sempre por referência
function getFuncionarioCargo(funcionario) {
  return {
    ...funcionario, //spread operator recurso que permite acessar o conteúdo de um objeto iteráve
    cargocompleto: `${funcionario.nome} ${funcionario.cargo}`, //expressao literal, simplifica concatenação
  };
}

const funcionarioCargo = getFuncionarioCargo(funcionario);

//retorna novo objeto + funcionarioCargo
console.log(funcionarioCargo)
