//declaração convencional
function funcao() {
  return "Hello";
}

//arrow function
//hoisting não funciona com arrow functions
//nome da função = (parametros) return => valor
const arrowfuncao = () => "Hello"; //1 unica expressão

const arrowfn = () => {
  //mais de uma expressão, return precisa ser implicito
  return "Hello";
};

var sum = (a, b) => a + b;
sum(10, 15);

var padrao = (a = 5) => a * 2;

//retornar objetos preciso utilizar o parenteses também
var returnObj = () => ({ teste: 122 });

//se tiver somente um argumento, podemos omitir os parenteses
var dobro = (a) => a * 2;

//funções também são objetos
funcao.prop = "Posso criar propriedades";

console.log(funcao);
console.log(funcao.prop);

//pode receber parâmetros
const logValue = (value) => console.log(value);
const logfnResult = (fnParam) => console.log(fnParam());

logfnResult(funcao);

//receber e retornar funções
//mesma ideia de currying
const controlFnExec = (fnParam) => (allowed) => {
  if (allowed) {
    fnParam();
  }
};

const handleFnExecution = controlFnExec(funcao);

handleFnExecution(true); //executara a funçao funcao
handleFnExecution(); // não executara a funcao

//bind altera o contexto de execução da funçao
var obj = {
  showContext: function showContext() {
    this.log("teste"); //this contexto da função atual, hoisting eleva log para cima
    setTimeout(function () {
      //this.log("Teste após 10000")},10000); //erro log não existe já que função timeout é invocada no escopo global
      //necessário utilizar o bind   
      this.log("Teste após 10000ms")}.bind(this),10000);//fixa o contexto da função,
  },

  log: function log(value) {
    console.log(value);
  },
};


//arrow function fixa o contexto léxico, não sendo necessário usar o bind
var obj = {
  showContext: function showContext() {
    this.log("teste"); 
    setTimeout(()=> {
      this.log("Teste após 10000ms")},10000);
  },

  log: function log(value) {
    console.log(value);
  },
};
