//anteriomente
var arr = ['maça', 'laranja', 'uva',['tomate']];

var maca = arr[0];
var laranja = arr[1];
var uva = arr[2];
var tomate = arr[3][0];

console.log(tomate);

//destructuring assigment
//destroi o array e o atribui a variáveis
//importante o uso de colchetes quando se tratar de arrays multidimensionais
var [maca1, laranja1, uva1,[tomate1]] = ['maça', 'laranja', 'uva', ['tomate']];
console.log(tomate1);

//pode ser utilizado para objetos

var obj = {
    name: 'Janaina'
}

//destructuring, destroi o objeto, encontra uma propriedade chamada name  a atribui para a variável name
var {name} = obj; //equivalente a var name = obj.name;

console.log(name);
//caso queira mudar o nome da variável
var {name: name2} = obj; 
console.log(name2);

//objeto dentro de objeto
var obj = {
    name: 'Janaina',
    props:{
        age: 39
    }
}
var {props:{age: age2}} = obj; //equivalente a var age = obj.props.age;
console.log(age2);

//mais um nível
var obj = {
    name: 'Janaina',
    props:{
        age: 39,
        colors:['black', 'blue']
    }
}
var {props:{age: age2, colors:[color1, color2]}} = obj; //equivalente a var color1 = obj.props.color[0];
console.log(color1);
