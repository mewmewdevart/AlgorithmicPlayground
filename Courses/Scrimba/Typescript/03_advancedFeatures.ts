/*
    TypeScript File Organization:

    This file is organized with the following goals in mind:
        - Readability: Clear structure and comments help developers understand the code easily.
        - Reusability: Encourages writing modular and reusable code segments.
        - Subjectivity: Some aspects of organization may vary based on project requirements and developer preferences.

    File Structure:
        - Import Statements: Imports external modules or dependencies.
        - Constants: Definitions of constant values used throughout the file.
        - Interfaces: Definitions of TypeScript interfaces.
        - Enums: Enumerated types to represent a set of named constants.
        - Classes: Class definitions for object-oriented programming.
        - Functions: Definitions of functions used within the file.
        - Main Execution: The main logic of the file, if applicable.

*/

// Import Statements MODULES
import { Module1, Module2 } from './modules'; // or => export Quando é um export do tipo default, nao é necessario colocar {}

// arquivo.ts
export default variavel: string;

// em main.ts
import variavel from './arquivo' //=> Nao é necessario colocar entre {}

// Constants
const MAX_ATTEMPTS = 5;
const BASE_URL = 'https://example.com/api';

// Interfaces => Para evitar ficar repetindo trechos
interface User {
    id: number;
    name: string;
    email: string;
}

// Enums
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

// Classes
class MyClass {
    constructor(private value: number) {}

    getValue(): number {
        return this.value;
    }
}

// Functions
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

// Main Execution
const user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
};

greet(user.name);
