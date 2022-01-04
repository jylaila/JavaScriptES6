//spread, iterar objetos e passar como parâmetros

var cores = ["azul", "verde"];
//permite combinar 2 array (como com a função concact)
var armarios = ["portas", ...cores, "maçaneta"]; //[ 'portas', 'azul', 'verde', 'maçaneta' ]

console.log(armarios);

function fn(x, y, z) {
  console.log(x, y, z);
}
var args = [10, 14, 15];
fn(...args); //fn(10,14,15)

//pode ser utilizado em strings, arrays, literal objetos e outros objetos iteraveis
//Exemplo string
const str = "Teste de Spread";

function logArgs(...args) {
  console.log(args); //[
  //   'T', 'e', 's', 't',
  //   'e', ' ', 'd', 'e',
  //   ' ', 'S', 'p', 'r',
  //   'e', 'a', 'd'
  // ]
}

logArgs(...str);

const arr = [1,2,3,5];
function logArgs(...args) {
  console.log(args);  
}

logArgs(...arr);//[1,2,3,5]

function logArgs(a,b,c) {
  console.log(a,b,c); 
}

logArgs(...arr);//1,2,3

//objetos iteráveis
const obj={
  test : 123
}
//spread só pode ser utilizado para construir outros objetos
const obj2={
  ...obj,
  test2: 'hello'
}

//erro!!!
const ar = [...obj];

//a ordem importa. Se colocar uma propriedade existente no obj, vai sobrescrever o spread
//Ex
const obj3={
  ...obj,
  test: 756 
}
console.log(obj3);

const obj5 = obj3; //obj5 aponta para o mesmo obj3, qualquer alteração no 1º obj reflete no 2º obj
//podemos usar spread para criar clones não referenciados

const obj5 = {...obj3};

//clones rasos, caso um objeto tenha outro objeto, ele continuará sendo referenciado
const obj ={
  test : 123,
  subObj:  {
    test :123
  }
}
const obj2 = {...obj};
obj2.subObj.test = 456; //altera todos os objetos

console.log(obj2); 

//para resolver podemos gerar um subObj, fazendo o  spread do 1º
const obj2 = {...obj, subObj: {...obj.subObj}};
