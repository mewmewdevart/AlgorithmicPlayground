// ⚠️ | Necessário usar 'tsc nomeDoArquivo.ts' para transformar o arquivo em JavaScript e então chamá-lo através do 'node nomeDoArquivo.js'

/* 1. Tipos de Array: Declare uma variável que seja um array de números. Em seguida, adicione alguns números a este array e imprima-os no console. */
let variavel: number[] = [23, 50, 700, 2.5];
console.log(variavel);

console.log("====================================================");
/* 2. Tipo Literal: Declare uma variável com o tipo `"male" | "female"` e atribua a ela um valor de sua escolha. Em seguida, imprima o valor no console. */

type Genero = "Masculino" | "Femea" | "Macho" | "Fluido";

const Humans: {
    genero: Genero; // => type Genero
    nome: string;
}[] = [
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
]

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

let livro: {
    title: string;
    author: string;
    pages: number;
}[]; // array de objetos

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

// Possivel fazer sem inicializar também => let livro: { title: string; author: string; pages: number; }[];

console.log(livro[0].author); // => João
console.log(livro[0].title); // => Livro
console.log(livro[0].pages); // => 5

console.log("-------------");

console.log(livro[1].author); // => Larissa
console.log(livro[1].title); // => Dicinario
console.log(livro[1].pages); // => 2
console.log("====================================================");

/* 4. Interface de Produto: Crie uma interface chamada `Product` com as propriedades `name` (string) e `price` (number). 
Em seguida, declare uma variável do tipo `Product` e atribua valores às propriedades. */

interface Product {
    name: string;
    price: number;
}

let product: Product = {
    name: "Notebook",
    price: 10,
}

console.log(product.name); //=> Notebook
console.log("R$ " + product.price + " Reais"); // => R$ 10 Reais

console.log("====================================================");
/* 5. Tipos de Usuário: Defina um tipo chamado `User` que pode ser um objeto com as propriedades `name` (string) e `age` (number).
Em seguida, declare uma variável do tipo `User` e atribua valores às propriedades. */
type User = {
    name: string;
    age: number;
}

let user: User = {
    name: "larissa",
    age: 24
};

console.log(user.name);

console.log("====================================================");
/* 6. Função que Retorna Tipos: Escreva uma função chamada `createUser` que aceita um nome (string) e uma idade (number) como parâmetros e
retorna um objeto com as propriedades `name` e `age`. */

// Duas formas de retornar
function createUser (nome: string, age: number): any {
    let obj: { nome: string, age: number }[] = [{
        nome: nome,
        age: age,
    }];
    return (obj);
}

function createUser2(nome: string, age: number): { name: string, age: number } {
    return {
        name: nome,
        age: age,
    };
}

console.log(createUser("João", 1)); // => retorna em formato de objeto
console.log(createUser2("João", 1)); // Retorna o nome e o numero juntos
console.log("====================================================");
/* 7. Union Types: Declare uma variável com o tipo `string | number` e atribua a ela um valor de sua escolha. Em seguida, faça uma verificação de tipo para determinar se a variável é uma string ou um número. */
let variavelUnion: string | number = 10;

function checkType(variavel: (string | number)): any{
    let result;

    if(typeof variavel === 'string')
        result = "É uma string!";
    else
        result = "É um numero!";
    return(result);
}

console.log(checkType("larissa"));
console.log(checkType(0));
console.log("====================================================");
/* 8. Tipo de Enumeração: Crie um enum chamado `Direction` com os valores `Up`, `Down`, `Left` e `Right`.
Em seguida, declare uma variável do tipo `Direction` e atribua a ela um dos valores do enum. */

enum Direction {
    Up, // => 0
    Down, // => 1
    Left, // => 2
    Right // => 3
}

let direction: Direction = Direction.Left;
console.log(direction); // => 
console.log("====================================================");
/* 9. Tuplas: Crie uma tupla chamada `person` que contenha o nome (string), idade (number) e cidade (string) de uma pessoa.
Atribua valores a esta tupla e imprima-os no console. */

let person: [string, number, string] = ["Guilherme", 22, "São Paulo"];

console.log(person); // => [ 'Guilherme', 22, 'São Paulo' ]
console.log("====================================================");
/* 10. Tipo de Intersecção: Defina dois tipos, `Admin` e `User`, com diferentes propriedades.
Em seguida, crie um terceiro tipo chamado `AdminUser` que é uma interseção entre `Admin` e `User`. */

type Admin = {
    adminLevel: number;
    isAdmin: boolean;
};
type User2 = {
    name: string;
    age: number;
};

// Criando o tipo AdminUser como uma interseção entre Admin e User
type AdminUser = Admin & User2;

