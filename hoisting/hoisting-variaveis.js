// Uma variável pode ser usada antes de ser declarada de forma implicita

function imprime() {
  console.log(mensagem); //undefined

  var mensagem = 'Hello World';

  console.log(mensagem);
}

imprime();