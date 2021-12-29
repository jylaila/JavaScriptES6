function Pessoa(nome) {
  this.nome = nome;
}

function PessoaFisica(cpf, nomef) {
  Pessoa.call(this, nomef);
  this.cpf = cpf;
}

const Taylor = new PessoaFisica(123456, "Taylor");

console.log(Taylor);
//PessoaFisica { nome: 'Taylor', cpf: 123456 }
