function imprime() {
  log("Hello World"); //funcao chamada antes de ser declarada

  function log(texto) {
    console.log(texto);
  }
}

imprime();

//a função é "içada como um todo, é levada ao topo"
//causa problemas na execução dos códigos. Boa prática sempre declarar função antes de usar
// function imprime(){

//     function log(texto){
//         console.log(texto);
//     }

//     log('Hello World'); //funcao chamada antes de ser declarada
// }
