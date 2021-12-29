var numeros = [1, 2, 3, 4, 5];
numeros.tipo = "int";

for (let i in numeros) {
  //imprime somente os índices
  console.log(i); //0,1,2,3,4,tipo
}

for (let i of numeros) {
  console.log(i); //1,2,3,4,5
}
