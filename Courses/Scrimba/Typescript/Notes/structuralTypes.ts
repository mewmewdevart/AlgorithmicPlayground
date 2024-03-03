// ====== 2. Tipos Estruturais no TypeScript ======

// == Tipos Primitivos ==
// Os tipos primitivos em TypeScript são semelhantes aos tipos primitivos em JavaScript.
// Eles incluem number, string, boolean, null, undefined e symbol.
let age: number = 25;
let name1: string = "John";
let isStudent: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// == Tipos Estruturais ==
// Os tipos estruturais em TypeScript são definidos por meio da combinação de tipos primitivos, 
// outros tipos estruturais e tipos definidos pelo usuário.
// Isso inclui objetos, arrays, tuplas, unions, interfaces, entre outros.

// Exemplos de objetos e arrays:
// Objeto
let person1: { name: string, age: number } = { name: "John", age: 25 };

// Array
let numbers: number[] = [1, 2, 3, 4, 5];

// Exemplo de tuplas:
let coordinates: [number, number] = [10, 20]; // tupla representando coordenadas x e y

// Exemplo de union types:
let value: string | number = "Hello"; // value pode ser uma string ou um número

// == Comparação entre JavaScript e TypeScript ==
// == JavaScript ==
let person2 = { name: 'Ania' };

// == TypeScript ==
let you: {
    userName: string,
    isReturning: boolean
} = {
    userName: 'Bobby',
    isReturning: true
};
console.log(you.userName);

// Tipos definidos usando tuplas:
// Tuplas podem representar estruturas de dados heterogêneas com um número fixo de elementos.
/*
Exemplo: 
    [string, string, number]

    ['hi', 'bye', 6] ['up', 'down'] [true, 5, 5]

*/

// Any types
let you2: {
    userName: string,
    isReturning: boolean
    description: any
} = {
    userName: 'Bobby',
    isReturning: true,
    description: 'This is any type' // `description` pode ser de qualquer tipo
};

// Exemplo de uso de tuplas em uma função:
function printEmployeeInfo(info: [string, number]) {
    let [name, age] = info;
    console.log(`Name: ${name}, Age: ${age}`);
}

let employee: [string, number] = ['John', 30];
printEmployeeInfo(employee); // => "Name: John, Age: 30"

// Exemplo de interface:
interface Product {
    name: string;
    price: number;
}

function calculateTotal(products: Product[]): number {
    let total = 0;
    products.forEach(product => {
        total += product.price;
    });
    return total;
}

let products: Product[] = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 20 },
    { name: 'Keyboard', price: 50 }
];

let totalPrice = calculateTotal(products); // totalPrice é do tipo number

console.log(totalPrice); // => 1070

// ====== Union types ======

// Função "add" que adiciona ou concatena dois valores, dependendo de seus tipos:
function add(firstValue: (number | string), secondValue: (number | string))
    let result;
    if (typeof firstValue === 'number' && typeof secondValue === 'number')
        result = firstValue + secondValue; 
    if (typeof firstValue === 'string' && typeof secondValue === 'string')
        result = firstValue + ' ' + secondValue; 
    if (typeof firstValue === 'number' && typeof secondValue === 'string')
        console.log('cannot perform this addition');
    if (typeof firstValue === 'string' && typeof secondValue === 'number')
        console.log('cannot perform this addition'); 
    return result;
}

const combinedReviews = add(5, 1); // Soma os números
const firstNameLastName = add('Ania', 'Kubow'); // Concatena as strings

console.log(combinedReviews); // => 6
console.log(firstNameLastName); // => "Ania Kubow"