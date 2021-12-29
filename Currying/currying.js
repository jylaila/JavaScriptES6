// técnica de transformação de uma função que recebe múltiplos parâmetros (mais especificamente, uma n-tupla como parâmetro) de forma que ela pode ser
// chamada como uma cadeia de funções que recebem somente um parâmetro cada

function multiplica(a) {
  return function (b) {
    return a * b;
  };
}

const multiplica2 = multiplica(3); //inicializo o parâmetro a da primeira função

console.log(multiplica2(3)); //inicializo o parâmetro b da segunda função
