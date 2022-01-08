// class customError extends Error {
//   construtor({ message, data }) {
//     super(message);
//     this.data = data;
//   }
// }
// try {
//   const name = "Janaina";
//   const myerror = new customError({
//     message: "Deu erro!!",
//     data: {
//       type: 'Conection Error"',
//     },
//   });
//   debugger; //para o codigo nesse ponto, breakpoint
//   throw myerror;
// } catch (err) {
//   console.log("Error: ", err);
//   console.log("Data: ", err.data);
// } finally {
//   console.log("Keep Going....");
// }

//console - funções do navegador
console.log('Texto'); //exibe texto em preto
console.warn('Warning'); //fundo amarelo
console.error('Error');
console.trace(); //trás informações de onde o erro aconteceu

console.group('Meu grupo!'); //agrupa as msg
console.log('');
console.log('');
console.log('');
console.groupEnd('Meu grupo!');

console.time('Log Time');
setTimeout(() => {
    console.timeEnd('Log Time');
}, 1000);

console.table(['Janaina', 'Fatec']);//formata em tabela
console.assert(1 === 1, 'Ops'); //espera que a condição seja verdadeira
console.log('%c styled log', 'color:blue; font-size: 14px'); //mudo a cor
