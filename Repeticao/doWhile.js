//
// do{
//     while(condicao){
//     //comandos
// }

//executa uma vez e somente depois testa a condição

const numeros = [1, 2, 3, 4, 5];
var x = 0;

do {
  console.log(`Índice: [${x}] = ${numeros[x]}`);
  x++;
} while (x < numeros.length);
