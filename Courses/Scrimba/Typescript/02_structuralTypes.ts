// ====== 2. Structural Types in TypeScript ======

//  ====== Diferenças entre tipos primitivos e tipos estruturais? ====== 

// Tipos primitivos:
// Os tipos primitivos em TypeScript são semelhantes aos tipos primitivos em JavaScript.
// Eles incluem number, string, boolean, null, undefined e symbol.
let age: number = 25;
let name1: string = "John";
let isStudent: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Tipos Estruturais:
// Os tipos estruturais em TypeScript são definidos por meio da combinação de tipos primitivos, 
// outros tipos estruturais e tipos definidos pelo usuário.
// Isso inclui objetos, arrays, tuplas, unions, interfaces, entre outros.

// Objeto, Array, Tuplas, Union Types etc
let person0: { name: string, age: number } = { name: "John", age: 25 }; // Objeto
let numbers: number[] = [1, 2, 3, 4, 5]; // Array:
let coordinates: [number, number] = [10, 20]; // Tuplas: tupla representando coordenadas x e y
let value: string | number = "Hello"; // Union types: value pode ser uma string ou um número

// ====== Objeto ====== 
/* O que são objetos? Estrutura de dados que contém pares de chave-valor, onde cada chave é uma string (ou símbolo) e o valor
pode ser qualquer tipo de dado suportado pela linguagem */

// Tipagem direta:
let person1: {
	name: string,
	age: number
} = {
	name: "John",
	age: 25
};

console.log("Hello, person1 : " + person1.name);

// Usando o tipo type:
type PersonType = {
    name: string;
    age: number;
};

let person2: PersonType = {
    name: "Alice",
    age: 30
};

console.log("Hello, person2 : " + person2.name);

// Usando a palavra-chave type para criar um tipo de objeto anônimo:
let person3: { name: string; age: number } = {
    name: "Eva",
    age: 35
};

console.log("Hello, person3 : " + person3.name);

// Usando uma interface:
interface Person {
    name: string;
    age: number;
}

let person4: Person = {
    name: "Larih",
    age: 24
};

console.log("Hello, person4 : " + person4.name);


// Usando uma classe:
class PersonClass {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let person5 = new PersonClass("Bob", 28);


// Tuples
// [string, string, number];
let tuple1: [string, number] = ["up", 23];
let tuple2: [number, string] = [23, "down"];
let tuple3: [number, string, string[]] = [23, "middle", ["larissa", "joaozinho"]];

// Enums
enum Colors {
    Red,
    Green,
    Blue
}

let color: Colors = Colors.Green;
console.log("Selected color: " + Colors[color]);

// Tipos de Objetos
type Product = {
    name: string;
    price: number;
};

let product: Product = {
    name: "Laptop",
    price: 999
};
console.log("Product: " + product.name + ", Price: $" + product.price);

// Função que retorna tipos
function createUser(name: string, age: number): { name: string, age: number } {
    return { name, age };
}

let user = createUser("Alice", 25);
console.log("User: " + user.name + ", Age: " + user.age);

// Literal Types
let userType: "admin" | "user" = "admin";
console.log("User type: " + userType);

// Tipos Intersecção
type Admin = {
    isAdmin: boolean;
};

type User = {
    name: string;
};

type AdminUser = Admin & User;

let adminUser: AdminUser = {
    name: "Admin",
    isAdmin: true
};
console.log("Admin User: " + adminUser.name + ", Is Admin: " + adminUser.isAdmin);
