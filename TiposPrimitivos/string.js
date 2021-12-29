//criação de string
const animal = "Cachorro";

//tamanho da string
const animalsize = animal.length;
const fruta = "Uva".length;

//quebra string através de um delimitador
const nome = "Janaina Ferreira".split(" ");
console.log("\nstring quebrada", nome[1]);

//substitui o texto
const replaced = "Janaina ferreira".replace("f", "F");
console.log("\nTexto substituido", replaced);

//última letra de uma string
//slice(inicio, fim)
const lastCchar = "Flores".slice(-1);

//Tudo menos o último caractere
const allwithouLast = "Flores".slice(0, -1);

//caracteres a partir de uma posição
//substring(inicio,qtdecaracteres)
const doisprimeiros = "Flores".substring(0, 2);
