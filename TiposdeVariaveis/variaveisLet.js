(() => {
  let teste = "Exemplo";
  console.log(`valor dentro da função ${teste}`);

  if (true) {
    let teste = "Valor do if";
    console.log(`valor dentro do if ${teste}`); //escopo de bloco da função
  }
  console.log(`valor após a execução do if ${teste}`); //imprime Exemplo
})();
