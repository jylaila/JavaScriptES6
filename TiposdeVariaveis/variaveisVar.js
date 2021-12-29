var teste = "Exemplo";

//função de execução imediata
(() => {
  console.log(`valor dentro da função ${teste}`); //undefined

  if (true) {
    var teste = "teste"; //não entende escopo de bloco, faz hoisting
    console.log(`valor dentro do if ${teste}`);
  }
  console.log(`valor após a execução do if ${teste}`);
})();
