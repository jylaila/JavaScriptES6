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
const diasSemana = {
  SEGUNDA: Symbol("Segunda-feira"),
  TERÇA: Symbol("Terça-feira"),
  QUARTA: Symbol("Quarta-feira"),
  QUINTA: Symbol("Quinta-feira"),
  SEXTA: Symbol("Sexta-feira"),
  SABADO: Symbol("Sabado"),
  DOMINGO: Symbol("Domingo"),
};
