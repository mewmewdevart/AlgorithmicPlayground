// ⚠️ | Necessário usar 'tsc nomeDoArquivo.ts' para transformar o arquivo em JavaScript e então chamá-lo através do 'node nomeDoArquivo.js'
/* 1. Tipos de Array: Declare uma variável que seja um array de números. Em seguida, adicione alguns números a este array e imprima-os no console. */
var variavel = [23, 50, 700, 2.5];
console.log(variavel);
console.log("====================================================");
var Humans = [
    {
        genero: 'Femea',
        nome: "Larissa"
    },
    {
        genero: 'Macho',
        nome: "João"
    },
    {
        genero: 'Binario',
        nome: "Sam"
    },
];
console.log(Humans[0].genero);
console.log(Humans[1].genero);
console.log(Humans[2].genero);
console.log("====================================================");
/*  3. Tipo de Objeto Anônimo: Crie um tipo de objeto anônimo que represente um livro com as propriedades `title` (string), `author` (string) e `pages` (number).
Em seguida, declare uma variável com este tipo e atribua valores às propriedades.*/
/* O erro está ocorrendo porque você está tentando atribuir dois objetos literais diferentes para a variável livro,
mas sem utilizar uma estrutura de array ou objeto para armazená-los.

let livro: {
    title: string;
    author: string;
    pages: number;
}

livro = {
    title: "Livro",
    author: "João",
    pages: 5,
}, {
    title: "Dicinario",
    author: "Larissa",
    pages: 2,
} */
var livro; // array de objetos
livro = [
    {
        title: "Livro",
        author: "João",
        pages: 5
    },
    {
        title: "Dicionario",
        author: "Larissa",
        pages: 2
    }
];
console.log(livro[0].author); // => João
console.log(livro[0].title); // => Livro
console.log(livro[0].pages); // => 5
console.log("-------------");
console.log(livro[1].author); // => Larissa
console.log(livro[1].title); // => Dicinario
console.log(livro[1].pages); // => 2
console.log("====================================================");
var product = {
    name: "Notebook",
    price: 10
};
console.log(product.name); //=> Notebook
console.log("R$ " + product.price + " Reais"); // => R$ 10 Reais
console.log("====================================================");
var user = {
    name: "larissa",
    age: 24
};
console.log(user.name);
console.log("====================================================");
/* 6. Função que Retorna Tipos: Escreva uma função chamada `createUser` que aceita um nome (string) e uma idade (number) como parâmetros e
retorna um objeto com as propriedades `name` e `age`. */
function createUser(nome, age) {
    var obj = [{
            nome: nome,
            age: age
        }];
    return (obj);
}
console.log(createUser("João", 1));
console.log("====================================================");
/* 7. Union Types: Declare uma variável com o tipo `string | number` e atribua a ela um valor de sua escolha. Em seguida, faça uma verificação de tipo para determinar se a variável é uma string ou um número. */
var variavelUnion = 10;
function checkType(variavel) {
    var result;
    if (typeof variavel === 'string')
        result = "É uma string!";
    else
        result = "É um numero!";
    return (result);
}
console.log(checkType("larissa"));
console.log(checkType(0));
console.log("====================================================");
/* 8. Tipo de Enumeração: Crie um enum chamado `Direction` com os valores `Up`, `Down`, `Left` e `Right`.
Em seguida, declare uma variável do tipo `Direction` e atribua a ela um dos valores do enum. */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // => 3
})(Direction || (Direction = {}));
var direction = Direction.Left;
console.log(direction);
/* 9. Tuplas: Crie uma tupla chamada `person` que contenha o nome (string), idade (number) e cidade (string) de uma pessoa.
Atribua valores a esta tupla e imprima-os no console. */
var person = ["Guilherme", 22, "São Paulo"];
console.log(person);
/*
9. Tuplas: Crie uma tupla chamada `person` que contenha o nome (string), idade (number) e cidade (string) de uma pessoa. Atribua valores a esta tupla e imprima-os no console.

10. Tipo de Intersecção: Defina dois tipos, `Admin` e `User`, com diferentes propriedades. Em seguida, crie um terceiro tipo chamado `AdminUser` que é uma interseção entre `Admin` e `User`.

Essa ordem deve facilitar sua progressão gradualmente, permitindo que você construa uma compreensão mais sólida dos tipos estruturais em TypeScript à medida que avança nos exercícios. */ 
