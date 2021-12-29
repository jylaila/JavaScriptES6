//recebe 2 operandos
//oper1 operacao oper2
// 1        +      2

//operador unário 1 operando
//oper1 operacao
// //operacao oper1
// x++
// ++x

//unário
delete algo;

//determinar tipo
typeof(algo);

//binario operador in
//ope1 in ope2

var cores = ['azul', 'verde'];
0 in cores; //false
'azul' in cores; //false
'azul' in cores[0]; //true
'lenght' in cores; //true é uma propriedade do vetor

//instanceof
var dia = new Date(2021,28,12);

if (dia instanceof(Date)){
    //codigo
}