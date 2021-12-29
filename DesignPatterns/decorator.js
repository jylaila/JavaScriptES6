//uma função decorator recebe outra função como parâmetro e estende seu comportamento sem modifica-lo
//utiliza o @ no typeScript. Equivalente em JavaScript

let loggedIn = true;

function callIfAuthenticated(fn) {
  return !!loggedIn && fn();
}

function sum(a, b) {
  return a + b;
}
//decorator
console.log(callIfAuthenticated(() => sum(2, 3))); //5
loggedIn = false;
console.log(callIfAuthenticated(() => sum(2, 3))); //não imprime nada
