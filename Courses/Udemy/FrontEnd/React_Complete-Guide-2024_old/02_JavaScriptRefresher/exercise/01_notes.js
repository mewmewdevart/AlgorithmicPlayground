// --------------- Arrow Function
// Examples of export default functions
// Example 1: Function with no parameters, logs "Hello World!"
export const greetWorld = () => {
    console.log("Hello World!");
}

// Example 2: Arrow function with no parameters, logs "Bye"
export const sayBye = () => {
    console.log("Bye");
}

// Example 3: Arrow function with parameters, concatenates username and message
export const concatenate = (username, message) => {
    return username + message;
}

// Object definition
// You can store a group of different values and types within an object

const user = {
    name: "Larissa",
    age: 24,
    greet() {
        console.log("What's up, bro");
        console.log(this.name);
    }
}

console.log(user);
console.log(user.name);

// --------------- Classes
// A class in JavaScript is a blueprint for creating objects with predefined properties and methods.
// It encapsulates data for the object and defines behavior through methods.

class User {
    // The constructor method is called when a new instance of the class is created.
    // It initializes the object with initial values.
    constructor(name, age) {
        // 'this' refers to the current instance of the class.
        // It is used to access and modify properties of the object.
        this.name = name;
        this.age = age;
    }

    // Methods can be defined inside the class to perform actions on the object.
    // These methods are accessible to all instances of the class.
    greet() {
        console.log("Hello!");
    }
}

// --------------- Arrays & Array Methods

// Arrays in JavaScript are used to store multiple values in a single variable.
// They can hold various data types and can be manipulated using array methods.

// Creating an array named 'hobbies' with three elements.
const hobbies = ["Sports", "Cooking", "Reading"];

// Accessing elements of the array using index.
console.log(hobbies[0]); // Outputs: "Sports"

// Adding a new element to the end of the array using the push method.
hobbies.push("Working");
console.log(hobbies); // Outputs: ["Sports", "Cooking", "Reading", "Working"]

// Finding the index of an element in the array using the findIndex method.
// This method returns the index of the first element in the array that satisfies the provided testing function
const index = hobbies.findIndex((item) => item === "Sports");
console.log("Index of 'Sports':", index); // Outputs: Index of 'Sports': 0

// Using the map method to create a new array based on the original array.
// This method iterates over each element of the array and applies a callback function to each element.
const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies); // Outputs: ["Sports!", "Cooking!", "Reading!", "Working!"]

const editedHobbies2 = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies2); // Outputs: [{ text: "Sports" }, { text: "Cooking" }, { text: "Reading" }, { text: "Working" }]


// --------------- Destructuring
// Destructuring in JavaScript means extracting values from arrays or properties from objects and assigning them to variables in a concise and readable way. 

// In Arrays
// Normally used:
const userNameData = ["Larissa", "Cristina"];
const firstName = userNameData[0];
const lastName = userNameData[1];

console.log(firstName + " " + lastName); // Output: Larissa Cristina

// With destructuring:
const [firstName1, lastName1] = ["Larissa", "Cristina"];
console.log(firstName1 + " e " + lastName1); // Output: Larissa e Cristina

// In Objects
// Destructuring the object to extract specific properties into variables
const { name: userName, age } = {
    name: "João",
    age: 2
};

console.log(userName); // Output: João
console.log(age); // Output: 2


// --------------- Spread Operator
// Defining an array of hobbies
const hobbies3 = ["Sports", "Cooking"];
// Defining an object with name and age properties
const user3 = {
    name: "Max",
    age: 34
}

// Defining a new array of hobbies
const newHobbies3 = ["Reading"];
// Merging the existing hobbies array and the new hobbies array using the spread operator
const mergedHobbies3 = [...hobbies3, ...newHobbies3]

console.log(mergedHobbies3); // Output: ["Sports", "Cooking", "Reading"]


const extendedUser = {
    isAdmin: true,
    ...user3
}

console.log("extendedUser", extendedUser);

// --------------- For Loops
const comidas = ["Arroz", "Feijão", "Sopa", "Pizza"]

// Basic For Loop
for (const comida of comidas) {
    console.log(comida);
}

// For...in Loop (for iterating over object properties)
const pessoa = {
    nome: "João",
    idade: 25,
    profissao: "Desenvolvedor"
};

for (const propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}

// --------------- Manipulating the DOM (not with ReaCT)
const list = document.querySelector("ul");
list.remove();