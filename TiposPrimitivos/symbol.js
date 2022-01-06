//permite criar um objeto único
//permitir atributos privados em classe

const symbol1 = Symbol();

//previne conflito entre nomes de propriedades
const nomeSimbol1 = Symbol("name");
const nomeSimbol2 = Symbol("name");

const user = {
  [nomeSimbol1]: "Maria",
  [nomeSimbol2]: "Janaina",
  ultimonome: "Ferreira",
};

console.log(user);

//imprimindo as propriedades
console.log(Object.keys(user));

//exibir symbols de uma propriedade
console.log(Object.getOwnPropertySymbols(user));

//acessando todas as propriedades do objeto
console.log(Reflect.ownKeys(user));

//criar um enum
//gera um id unico
const diasSemana = {
  SEGUNDA: Symbol("Segunda-feira"),
  TERÇA: Symbol("Terça-feira"),
  QUARTA: Symbol("Quarta-feira"),
  QUINTA: Symbol("Quinta-feira"),
  SEXTA: Symbol("Sexta-feira"),
  SABADO: Symbol("Sabado"),
  DOMINGO: Symbol("Domingo"),
};

const uniq1 = Symbol("Hello");

const uniq2 = Symbol("Hello");

console.log(uniq1 === uniq2); //false

//pode ser utilizada para criar propriedades "privadas"
const uniq3 = Symbol("Hello"); //informa ao desenvolvedor que não deve ser alterada
const obj = {
  uniq3: "Hello",
};
console.log(obj);
console.log(Object.keys(obj)); // não retorna as chaves
console.log(Object.getOwnPropertySymbols(obj)); // retorna as chaves

//well known symbols
//objeto symbols possui várias propriedades
// Symbol.iterator
// Symbol.split
// Symbol.toStringTag
//pode ser utilizado para adicionar meta propriedades aos objetos
const obj3 = {
  [Symbol.iterator]() {},
};

const arr = [1, 2, 3];
//gero uma interface que é responsavel pela interação do meu array
const it = arr[Symbol.iterator](); //evita colisão de propriedades

console.log(it.next()); //retorna o proxímo elemento do array a cada iteração

var done = null;
while (true) {
  let { value, done } = it.next();

  if (done) {
    break;
  }

  console.log("Valor: ", value);
}
//recomendável usar o for of
for (let value of arr) {
  console.log(value);
}
//não é possivel iterar objetos por isso usamos os Symbols
const obj = {
  value: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let id = 0;
    return {
      next: () => {
        id++;
        return {
          value: this.value[id - 1],
          done: id > this.value.length,
        };
      },
    };
  },
};
const it = obj[Symbol.iterator]();
console.log(it.next());
//agora posso iterar meu objeto
for (let x of obj) {
  console.log(x);
}

//posso usar o spread para criar uma novo array através do objeto
const meuarr = [...obj];
