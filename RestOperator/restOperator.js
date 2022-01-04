//... usamos para definir um numero ilimitado de parâmetros para função
//funciona de forma parecida com arguments, mas seu prototype é um array, possuindo os métodos de array

function sum(...nomedaVariavel){
    return nomedaVariavel.reduce((soma, valor)=>soma+=valor,0);
}

console.log(sum(1,2,3,4,5,6));
console.log(sum(1,2));

var sum2 = (...args)=>{
    console.log(args);
}
console.log(sum2(1,2));

var sum3 = (a, b, ...args)=>{ //1 parâmetro na variável a, 2 na variável b e o restante em args
    console.log(args); //5,7,7,8 - Não inclui os primeiros parâmetros
}
console.log(sum2(1,2, 5,6,7,8));


const multiplicacao = (...args)=>args.reduce((acc, valor)=>acc*value,1);

const soma = (...rest)=> {
    //anteriormente usariamos o apply para passar todos os parâmetros da função soma para a de multiplicação
    //return multiplicacao.apply(undefined, rest); 
    //podemos utilizar o spread operator, que é diferente do rest, uma vez que o rest pega todos os parametros e transforma em array
  
    //o spread pega todos os itens do array e converte para parâmetro de uma função
    return multiplicacao(...rest);
}

//anteriomente teríamos que usar o arguments. Exemplo:
//seu prototype é um objeto
function sum (a, b){
    var value = 0;
    for(let i=0; i<arguments.length; i++){
        value += arguments[i];
    }
    return value;
}
//em arrow functions não podemos usar arguments, retornára um erro undefined
var sum = ()=>{
    console.log(arguments);
}
console.log(sum(1,2,3,4));