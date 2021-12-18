(() => {
  this.name = "Nome no contexto de criação";

  //nome da função = (parametros) return => valor
  const getNameArrow = () => this.name;//vai sempre referenciar o escopo da função

  //equivalente
  function getName() {
    return this.name;//referencia o contexto que foi executada
  }

  const user = {
    name: "Nome do objeto em execução",
    getNameArrow,
    getName,
  };
  console.log(user.getNameArrow()); //imprime o name do contexto global (arrow function)
  console.log(user.getName());//imprime o name do contexto em que foi chamado
})();
