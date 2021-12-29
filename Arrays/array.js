const user = ["Taylor", "Cindy", "Noah"];

const gender = {
  MAN: Symbol("M"),
  WOMAN: Symbol("F"),
};

const students = [
  {
    name: "Taylor",
    age: 13,
    gender: gender.MAN,
  },
  {
    name: "Cindy",
    age: 12,
    gender: gender.WOMAN,
  },

  {
    name: "Noah",
    age: 7,
    gender: gender.MAN,
  },
];

//qtde de elementos de um array
console.log("Qtde de Elementos: ", students.length);

//verificar se é array
console.log("É array? ", Array.isArray(students));

//iterar entre os elementos do array
students.forEach((student) => {
  console.log(`nome: ${student.name}`);
});

//filtrar o array
//variavel =array.filter(parametro=>paramento.valor ==== valor)
const mens = students.filter((student) => student.gender === gender.MAN);
console.log("Lista de meninos: ", mens);

//filter, map e reduce não alteram a referencia ao objeto, retornam um novo, não altera o original
//retorna um novo array, adiciona um curso no array
const studentsWithCourse = students.map((student) => {
  student.course = "JavaScript";
  return student;
});
console.log("Alunos com curso:", studentsWithCourse);

//Transformar um array em outro tipo
// reduce(parametro que será retornado, array)
const totalAge = students.reduce((age, student) => {
  age += student.age;
  return age;
}, 0); //0 valor inicial da propriedade

console.log("Soma das idades:", totalAge);

//juntando as operações
const totalEvenAges = students
  .filter((student) => student.age % 2 === 0)
  .reduce((age, student) => {
    age += student.age;
    return age;
  }, 0);

console.log("Soma das idades pares: ", totalEvenAges);
