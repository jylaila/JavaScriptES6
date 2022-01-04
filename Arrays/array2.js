//array vazio
const arr = [];
const arr2 = new Array();

//array of cria uma nova instância de array a partir do numero de parâmetros informados
const pessoas = Array.of('Cindy', 'Noah', 'Taylor');

console.log(pessoas);

//criar array com tamanho definido
const num1 = Array(3); //3 elementos vazios 
console.log(num1); //[ <3 empty items> ]

const num2 = Array(3,2);
console.log(num2); //[ 3, 2 ]

//cria uma nova instancia de array a partir de um parâmetro array-like ou iterable object
// const divs = document.querySelectorAll('div'); //nodelist não possui funções para array
// const divs2 = Array.from(divs); //converte para array

//inserir elemento no array e retorna a qt de elementos
console.log(num2.push(5)); //3

//pop remove ultimo elemento do array, retorna o item removido
console.log(num2.pop());

//unshift adiciona no inicio do array e retorna a qtd de elementos do array
console.log(num2.unshift(5)); //3

//shift remove do inicio e retorna o elemento removido
console.log(num2.shift()); //3

//concatenar arrays e retornar novo array
const assados = [ 'Esfirra', 'Enroladinho'];
const fritos = ['Coxinha', 'Bolinho de queijo'];
const produtos = assados.concat(fritos);
console.log(produtos); //[ 'Esfirra', 'Enroladinho', 'Coxinha', 'Bolinho de queijo' ]

//slice 'fatia' o array de acordo com os índices informados
const n= [1,2,3,4,5];

//slice(inicio, fim)
n.slice(0,2); // [1,2] //pega a posição  0 e 1
//slice(a partir da posição)
n.slice(2); //[3,4,5]
n.slice(-1); //[5]
n.slice(-3); //[3,4,5]

//splice remove itens a partir de posições
//splice(indiceinicio, qtditensaremoverapartirdoindice, elementoaAdicionar)
n.splice(2); //[3,4,5] //remove a partir da segunda posição
n.splice(0,0,'first') 
console.log(n); //[ 'first', 1, 2 ]

//percorrendo o array
n.forEach((valor, indice)=>{
    console.log(`${indice} - ${valor}`)
});

const n2 = [10,11,12];

n.forEach((valor, indice, n2)=>{
    console.log(`${indice} - ${valor}`)
});

//map retorna novo array a partir do array
//=>retorno
const doces = ['brigadeiro', 'beijinho'];
console.log(doces.map((valor, indice)=> `${indice} - ${valor}`));

//flat retorno novo array com todos elementos do subarray concatenados de forma recursiva
const n3 = [1,2,[3,4]];
console.log(n3.flat());//[1,2,3,4]

const idades = [20,30,[10,15,[16,17]]];
//flat posso especificar a profundidade
console.log(idades.flat(2)); //[ 20, 30, 10, 15, 16, 17 ]

//flatMap junção do flat com o map
// retorna novo array e depois faz o flat
const n4 = [1,2,3,4];
n4.flatMap(value=>[value*2]); //[2,4,6,8];

n4.flatMap(value=>[[value*2]]); //[[2],[4],[6],[8]];

//keys retorna um Array Iterator que contém as chaves para cada elemento do array
const n5 = [10,20,25];
const n5Interator = n5.keys();

console.log(n5Interator.next()); //{ value: 0, done: false }

//values retorna retorna um array iterator com valores
const n6 = [10,20,25];
const n6Interator = n6.values();

console.log(n6Interator.next()); //{ value: 10, done: false }

//entries retorna um array iterator com pares chave - valor para cada elemento do array
const n7 = [10,20,25];
const n7Interator = n7.entries();

console.log(n7Interator.next()); //{ value: [ 0, 10 ], done: false }
console.log(n7Interator.next()); //{ value: [ 1, 20 ], done: false }

//find retorna o primeiro item que atenda a condição
const n8 = [1,2,3,45];
const achou1 = n8.find(valor=>valor > 2); //3

//findIndex retorna o primeiro indice que atenda a condição
const n9 = [1,2,3,45];
const achou2 = n9.findIndex(valor=>valor > 2); //2

//filter retorna todos os elementos que correspondam a condição
const n10 = [1,2,3,45];
const achou3 = n10.filter(valor=>valor > 2); //[3,45]

//Indexof retorna o índice do elemento pesquisado no array
const n11 = [1,2,3,3,45];
const achou4 = n11.indexOf(3); //2

//lastindexof retorna o último indice
const n11 = [1,2,3,3,45];
const achou4 = n11.indexOf(3); //3

//Includes pesquisa se o elemento existe no array, retorna um boolean
const n12 = [1,2,3,3,45];
n12.includes(7); //false

//some, verifica se um item do array satifaz uma determinada condição
const n13 = [2,8,7,9,10];
//verifico se tem algum numero par
const hassomeEven = n13.some(value => value%2===0); //true

//every verifica se todos os itens correspondem a condição
const n13 = [2,8,7,9,10];
//verifico se tem algum numero par
const hasAllEven = n13.every(value => value%2===0); //false

//inverter o array
n13.reverse(); //[10,9,7,8,2]

//ordenar o array
n13.sort(); //[2,7,8,9,10]

//join junta os elementos do array, separados por um delimitador e retorna uma string
n13.join('-'); //2-7-8-9-10

//reduce intera cada posição do array e retorna outro tipo de dado ou um array
// reduce(elementoquevouretornar,variavel)

const number = [1,2,3,4,5];
number.reduce((total, value)=>total +=value, 0); //0 é o valor inicial da variavel total,o tipo de dado que será retornado
//15

const nomes = ['Taylor', 'Cindy', 'Noah'];
nomes.reduce((nome, valor)=>nome += valor + ' ', '');
//Taylor Cindy Noah