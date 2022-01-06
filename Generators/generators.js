//são funções com "pausa" que disparam valores
//usa-se o operador * e a palavra reservalda yield

//Exemplo: A cada console.log da função quero fazer uma pausa
//Permite usar iterator na função

function* digaOla() {
  console.log("Bom dia");
  yield;
  console.log("Bem-vindo!");
  yield;
  console.log("Hello World!");
}
const it = digaOla();

console.log(it.next()); //a cada iteração executa o trecho da função até o yield//imprime Bom dia
console.log(it.next()); //imprime Bem vindo
console.log(it.next()); //imprime Hello World!;

//o value vem como undefined, caso deseje retornar um valor, ele deve proceder o yield
function* operacoes(x, y) {
  console.log("soma");
  yield x + y; //retorna x+y
  console.log("subtração");
  yield x - y; //retorna x - y
}

const calc = operacoes(10, 15);

console.log(calc.next());
console.log(calc.next());

//posso passar valores externos para a função
function* imprime() {
  console.log("hello");
  yield 1;
  console.log("from SP");
  const from = yield 2; //
  console.log(from);
}

const x = imprime();

console.log(x.next());
console.log(x.next()); //retorna 2
console.log(x.next("Valor que irá para a variável from dentro da função"));

//Gera numeração infinita

function* geraInt() {
  let numero = 0;
  while (true) {
    yield numero;
    numero++;
  }
}

//a cada interação um novo inteiro sequencial é gerado
const num = geraInt();
console.log(num.next()); //0
console.log(num.next()); //1
console.log(num.next()); //2

//iterator usando generator
//generator são uma forma de consumir interadores
const obj = {
  values: [1, 2, 3, 4],
  //meta propridade, permite transformar o obj em iteravel
  *[Symbol.iterator]() {
    for (let i = 0; i < this.values.length; i++) {
      yield this.values[i];
    }
  },
};

for (let value of obj){
    console.log(value);
}
