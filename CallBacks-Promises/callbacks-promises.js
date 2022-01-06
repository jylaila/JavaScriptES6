//callback executa algo apos uma tarefa ser executada

function primeiraFuncao(callback) {
  setTimeout(() => {
    //faz algo
    callback("Primeiro");
  }, 1000);
}
function segundaFuncao(callback) {
  setTimeout(() => {
    //faz algo
    callback("Segundo");
  }, 1000);
}

function chamaTodas() {
  try {
    primeiraFuncao(function (data) {
      var processamento1 = data.split(""); //somente exemplo de processamento
      try {
        segundaFuncao(function (data2) {
          var processamento2 = data2.split(""); //somente exemplo de processamento

          try {
            setTimeout(function () {
              console.log(processamento1, processamento2);
            }, 1000);
          } catch (err) {
            //alguma coisa
          }
        });
      } catch (err) {
        //algumacoisa
      }
    });
  } catch (err) {
    //algumacoisa
  }
}

chamaTodas();

//Reescrevendo as funções usando promise

//caso os dados não venham por algum motivo preciso tratar cada etapa da chamada da função //custoso
//Para isso usamos promisses, uma maneira mais inteligente de trabalhar com programação assincrona
//se deu certo retorna resolve, caso ocorra erro retorna reject
const myPrimeiraFuncao = ()=> new Promise((resolve, reject) => {
  setTimeout(() => {
    //faz algo
    resolve("Primeiro!");
  }, 1000);
});
const mySegundaFuncao = ()=>new Promise((resolve, reject) => {
  setTimeout(() => {
    //faz algo
    resolve("Segundo!");
  }, 1000);
});
//quando criamos promises elas já são invocadas
console.log(myPrimeiraFuncao()); //promise pending será resolvida apos 1000ms

//promises possuem 3 estados
//pending - quando esta pendente, em execução
//fulfilled - quando terminou de executar
//reject - quando acontece erro

//modo correto de executar usando o then
myPrimeiraFuncao().then((data) => console.log(data));

//para tratar erros
myPrimeiraFuncao()
  .then((data) => console.log(data))
  .catch((erro) => console.log(erro));

//pegar os dados e invocar uma nova promise
myPrimeiraFuncao()
  .then((data) => mySegundaFuncao())
  .then((data2) => console.log(data2))
  .catch();

//testando, caso aconteça um erro em qualquer das promises o erro vai ser tratado por um único catch
//tratamento melhor de erros
myPrimeiraFuncao()
  .then((data) => {
    console.log(data);
    return mySegundaFuncao();
  })
  .then((data2) => console.log(data2))
  .catch(error=>console.log(error));

  //para executar de forma paralela, mas serão resolvidas somente quando as duas terminarem
  Promise.all([myPrimeiraFuncao(), mySegundaFuncao]).then(data=>console.log(data));

  //para retornar a primeira que for resolvida, usamos o race
  Promise.race([myPrimeiraFuncao(), mySegundaFuncao]).then(data=>console.log(data));