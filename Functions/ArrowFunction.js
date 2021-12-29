//declaração convencional
function funcao() {
  return "Hello";
}

//arrow function
//nome da função = (parametros) return => valor
const arrowfuncao = () => "Hello"; //1 unica expressão

const arrowfn = () => {
  //mais de uma expressão, return precisa ser implicito
  return "Hello";
};

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
