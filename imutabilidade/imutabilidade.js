const funcionarios = [
  {
    nome: "Janaina",
    salario: 5000,
  },
  {
    nome: "Taylor",
    salario: 10000,
  },
  {
    nome: "Cindy",
    salario: 15000,
  },
];

function getFuncionarioRico(funcionariolist) {
  return funcionariolist.filter(
    (funcionarios) => funcionarios.salario >= 10000
  );
}

console.log("Funcionários ricos:");
console.log(getFuncionarioRico(funcionarios));

console.log("\nTodos Funcionarios:");
console.log(funcionarios);
