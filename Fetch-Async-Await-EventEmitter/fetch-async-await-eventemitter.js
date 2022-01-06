//fetch equivalente as requisições html, mas usando promise
//por padrão o metódo http é get
fetch("http://localhost:8080/data.json")
  .then((responseStream) => {
    if (responsStream.status === 200) {
      return responseStream.json();
    } else {
      throw new Error("Request error");
    }
  }) //catch captura caso aconteça um erro de rede
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//podemos alterar o método passando outro parâmetro para fetch
fetch("http://localhost:8080/data.json", {
  method: "post",
  body: JSON.stringify,
})
  .then((responseStream) => {
    if (responsStream.status === 200) {
      return responseStream.json();
    } else {
      throw new Error("Request error");
    }
  }) //catch captura caso aconteça um erro de rede
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//ES7
//async-await - uma forma de criar promises de maneira simples
//async transforma a função em uma promise
const simplefunction = async function () {};
const samplefunction = async () => {
  return 123;
};

console.log(samplefunction()); //retorna uma promise já resolvida

simplefunction().then((data) => console.log(data));

//await espera até que outras promises sejam resolvidas
const asyncTimer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12345);
    }, 1000); //1s
  });

//aguarda a resolução da funcao asyncTimer e retorna no data
//Consegue fazer processamento assincrono de forma sequencial
const samplefunction2 = async () => {
  const data = await asyncTimer();
  const dataJson = await fetch("data.json").then((resStream) =>
    resStream.json()
  );
  return dataJson;
};

const EventEmitter = require("events");
//NODE eventEmitter
const eventEmitter = require("events");
const { emit } = require("process");
const emitter = new eventEmitter();

//crio um evento especifico
emitter.on("User logged", (data) => console.log(data));

//posso emitir eventos
emitter.emit("User logged: ", { user: "Janaina" });

//posso criar uma classe que estende e criar um método para simplificar
class User extends EventEmitter() {
  userLogged(data) {
    emitter.emit("User logged: ", { user: "Janaina" });
  }
}

const users = new User();
users.on("User logged", (data) => console.log(data));

//caso queira consumir apenas uma vez
users.once("User logged", (data) => console.log(data));

users.userLogged({ user: "Janaina" });
