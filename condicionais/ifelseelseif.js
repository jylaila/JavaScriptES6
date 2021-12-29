// if (condicao){

// }else if(condicao){

// }
// else{

// }


//quando a primeira condição for verdadeira, sai do if
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((item) => {
  if (item % 2 === 0) {
    console.log("O numero", item, "é divisivel por 2");
  } else if (item % 3 === 0) {
    console.log("O numero", item, "é divisivel por 3");
  } else if (item % 5 == 0) {
    console.log("O numero", item, "é divisivel por 5");
  }
  else{
    console.log("O numero", item, "não é divisivel por nenhum acima");
  }
});


