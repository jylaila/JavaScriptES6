//para testar usamos o assert
const assert = require("assert");
const Math = require("../src/math");

//chai mais claro os comandos que o assert
const expect = require("chai").expect;

const math = new Math();

//descrever os testes com a função describe
describe("Math Class", function () {
  //it descreve o comportamento esperado para a classe
  it("Sum two numbers", function () {
    //descrevo o comportamento
    //equal valida se as asserções são iguais, caso não sejam iguais dispara um erro
    //equal(atual, esperado, mensagem ou erro)
    assert.equal(math.sum(5, 5), 10);
  });

  //o teste continua passando. o it disponibiliza um parâmetro chamado done
  //uma vez o invocado garante que o teste vai aguardar a promise, callback etc para ser finalizado
  //o limite de timeout do mocha é 2000ms
  it("Sub two numbers Assincrono", function (done) {
    math.sub(5, 5, (value) => {
      assert.equal(value, 0);
      done();
    });
  });

  //é possível alterar o timeout usando a função timeout do mocha
  //não é recomendado utilizar arrow function
  it("Mult two numbers Assincrono", function (done) {
    this.timeout(3000);
    math.sub(5, 5, (value) => {
      assert.equal(value, 0);
      done();
    });
  });

  it("Div two number"); //pendente

  //usamos o only para que seja o unico teste executado
  it.only("executa apenas um teste");

  //skip ignora o teste
  it.skip("Test", function () {
    assert.equal(math.sub(10, 10), 0);
  });

  //hooks permite executar códigos e evitar repetições
  //   this.beforeAll
  //   this.afterAll
  //   this.afterEach
  this.beforeEach(function () {
    //codigo que será executado antes da execução das funções
    //exemplo
    //instanciar a classe antes de cada execução, definir valor para variável etc
  });

  //usando o chai
  //permite documentar melhor os teste
  it("Mult two numbers Assincrono", function (done) {
    this.timeout(3000);
    math.sub(5, 5, (value) => {
      expect(value).to.equal(0);
      done();
    });
  });

  it("Test", function () {
    expect(math.sub(10, 10)).to.equal(0);
  });
  it.only("Verifica objeto", function () {
    const obj={
        nome: 'Janaina'
    }
    expect(obj).to.have.property('nome').to.equal('Janaina');
  });
});
