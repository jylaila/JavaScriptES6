//break interrompe a execução do laço
var index;

while (true) {
  //nunca faça isso

  index++;
  if (index > 2) {
    break;
  }
}

//continue pula uma interação vai para o próximo laço
const numeros = [1, 2, 3, 4];

for (let x = 0; x < numeros.length; x++) {
  var elemento = numeros[x];
  if (elemento % 2 === 0) {
    continue; //pula os elementos pares
  }
  console.log(`Índice: [${x}] = ${elemento}`);
}
