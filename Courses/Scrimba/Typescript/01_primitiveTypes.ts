// ====== 1. Primitive Types in TypeScript ====== 
/* In TypeScript, primitive types are the most basic data types that represent single values.
These types are immutable, meaning they cannot be modified once they are created. TypeScript supports the following primitive types: */

// ====== Types in TypeScript  ====== 
/* 
	Primitives:
		Boolean: type boolean - true or false
		Number: type number - 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
		String: type string - "Hello World"
		BigInt: type bigint - 9007199254740991n
		Symbol: type symbol - symbol
		Undefined: type undefined - undefined

	Structural:
		Object: type object - {name: "John", age: 30}
		Function: type function - function() {}
		
	Composite:
		Array: type array - [1, 2, 3, 4, 5]
		Tuple: type tuple - [string, number]
		Enum: type enum - enum {RED, GREEN, BLUE}
		Any: type any - any
		Void: type void - void
		Never: type never - never
		Unknown: type unknown - unknown
		Union: type union - type1 | type2
		Intersection: type intersection - type1 & type2
		Literal: type literal - "Hello World"
		Type Alias: type alias
		Type Assertion: type assertion
		Non-null assertion operator: non-null assertion operator
		Null: type null
		Never: type never
		Custom Types: custom types
		Interface: interface
		Class: class
*/


// ========================= Using typeof in TypeScript  ====== 
// This example demonstrates the usage of typeof in a simple calculator

// Selecting DOM elements
const btn: HTMLButtonElement | null = document.querySelector('.button');
const firstInput: HTMLInputElement | null = document.querySelector('.firstInput') as HTMLInputElement; // Type Assertion : Type assertion is a way to tell the compiler "trust me, I know what I'm doing." It's like type casting in other languages
const secondInput: HTMLInputElement | null = document.querySelector('.secondInput') as HTMLInputElement;
export const screen: HTMLElement | null = document.querySelector('.screen'); // Exporting screen : TypeScript is necessary if you intend to use it in other modules or files within your project. When you export a variable, function, or any other entity, it allows other modules to import and use that entity

// Function to add numbers
function addNumbers(a: number | string, b: number | string): void {
	// Check if both inputs are numbers
	if (typeof a === 'number' && typeof b === 'number') {
		// If they are numbers, display their sum a
		if (screen) screen.innerHTML = (a + b).toString();  // => 34
	} else {
		// If inputs are not numbers, convert them to integers and display their sum
		if (screen) screen.innerHTML = (parseInt(a as string) + parseInt(b as string)).toString(); // => 7
		// screen.innerHTML = (a+b).parseInt;
	}
}

btn?.addEventListener('click', () => addNumbers(firstInput?.value, secondInput?.value)); // => ? : Optional Chaining Operator
									// addNumbers(parseInt(firstInput.value), parseInt(secondInput.value));

// ====== Viewing TypeScript Prompts  ====== 
let num: number = 5; // or 5.5
let str: string = "Hello World"; // or 'Hello World' `aloha`  and 'a'
let bool: boolean = true;
let n: null = null;
let u: undefined = undefined;
let big: bigint = 9007199254740991n;
let sym: symbol = Symbol("sym");
let obj: object = {name: "John", age: 30};
let fun: Function = function() {};

// ====== Type Assignment and Type Inference ====== 
// Declaration with explicit type assignment
const isOpen: boolean = true; // isOpen will always be of type boolean and cannot be reassigned

// Declaration with type inference
let isOpen2 = true; // The type of isOpen2 is inferred as boolean based on the assigned value
// isOpen2 can be reassigned with values of any type later on
