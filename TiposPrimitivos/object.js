//par chave : valor

const user = {
    email: 'janaina@email.com',
    senha:'1234'
};

//alterando a propriedade de um objeto
user.email = 'janainaprof@email.com';
user['email']= 'janainaprof@email.com';

//receber uma propriedade de forma dinamica
function getProp(prop){
    return user[prop];
}

getProp('name');

//criando uma nova propriedade
user.login = 'janaina';

console.log(user);

//deletando uma propriedade
delete user.login;

//recupera os valores das chaves dos arrays
console.log(Object.values(user));

//recupera as chaves dos arrays
console.log(Object.keys(user));

//recupera um array de arrays com valores e chaves
console.log(Object.entries(user));

//mergeando uma propriedade em outro objeto
Object.assign(user, {data:'17/12/2021'});
console.log(user);

//previne alterações no objeto
const alunos = {
    nota : 7
};
Object.freeze(alunos);
alunos.nota = 8;
console.log(alunos);

//permite a alteração do objeto
Object.seal(alunos);


