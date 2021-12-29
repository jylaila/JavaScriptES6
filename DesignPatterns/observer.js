//A instância(subscriber) mantém uma coleção de objetos(observers) e notifica todos
//quando houver mudança de estado.
//Vue, RXJs

class Observable {
  constructor() {
    this.observers = []; //lista dos observers
  }
  //adicionar novos itens na lista fn =funcao
  subscribe(fn) {
    this.observers.push(fn);
  }
  //remover itens da lista
  unsubscribe(fn) {
    this.observers = this.observers.filter((obs) => obs != fn);
  }
  //notifica as mudanças
  notify(data) {
    this.observers.forEach((fn) => fn(data));
  }
}

//instancia da classe
const o = new Observable();
const logdata1 = (data) => console.log(`Subscribe 1 ${data}`);
const logdata2 = (data) => console.log(`Subscribe 2 ${data}`);
const logdata3 = (data) => console.log(`Subscribe 3 ${data}`);

//chamada para o método subscribe
o.subscribe(logdata1);
o.subscribe(logdata2);
o.subscribe(logdata3);

o.notify("Subscriber");

o.unsubscribe(logdata1);

o.notify("Subscriber");
