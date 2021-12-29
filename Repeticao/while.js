// while(condicao){
//     //comandos
// }

//testa a condição primeiro e só depois executa

const numeros = [1,2,3,4,5];
var x = 0;

while (x < numeros.length){
    console.log(`Índice: [${x}] = ${numeros[x]}`);
    x++;
}