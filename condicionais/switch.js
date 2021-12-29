// switch(expressao){
//     case valor1:
//         break;
//     case valor2:
// //         break;
//         default:
//             break;
// }

const fruta = "Pera";
var preco = 0;

switch (fruta) {
  case "Maça":
    preco = 4.0;
    break;
  //limao ou pera
  case "Limão":
  case "Pera":
    preco = 8.5;
    break;
  default:
    preco = 0;
    console.log("Fruta não existente!");
    break;
}
console.log("Preço: ", preco);
