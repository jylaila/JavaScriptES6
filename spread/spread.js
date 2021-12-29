//spread, iterar objetos e passar como parâmetros

var cores = ["azul", "verde"];
var armarios = ["portas", ...cores, "maçaneta"]; //[ 'portas', 'azul', 'verde', 'maçaneta' ]

console.log(armarios);

function fn(x, y, z) {
  console.log(x, y, z);
}
var args = [10, 14, 15];
fn(...args); //fn(10,14,15)
