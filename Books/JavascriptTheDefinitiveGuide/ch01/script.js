// A tour of JavaScript

let x ; // Declare a variable named x.

// Values can be assigned to variables with an = sign.
x = 0; // Now the variable x has the value 0
x // => 0: A variable evaluates to its value.

// ======== JavaScript supports several types of values
x = 1; // Numbers.
x = 0.01; // Just one Number type for integers and reals.
x = "hello world"; // Strings of text in quotation marks.
x = 'JavaScript'; // Single quote marks also delimit strings.
x = true; // Boolean values.
x = false; // The other Boolean value.
x = null; // Null is a special value that means "no value".
x = undefined; // Undefined is like null.

// ======== JavaScript's most important data type is the object.
// An object is a collection of name/value pairs, or a string to value map.
let book = { // Objects are enclosed in curly braces.
	topic: "Javascript", // The property "topic" has value "Javascript".
	edition: 7 // The property "edition" has value 7.
} // The curly brace marks the end of the object.

// ======== Access the properties of an object with . or []:
book.topic // => "Javascript"
book["edition"] // => 7: another way to access property values.
book.author = "Flanagan"; // Create new properties by assignment.
book.contents = {}; // {} is an empty object with no properties.

// ======== Conditionally access properties with ?. operator
book.contents?.ch01?.sect1 // => undefined: book.contents has no ch01 property.

// ======== JavaScript also supports arrays (numerically indexed lists)
let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].
primes[0] // => 2: the first element (index 0) of the array.
primes.length // => 4: how many elements in the array.
primes[primes.length-1] // => 7: the last element of the array.
primes[4] = 9; // Add a new element by assignment.
primes[4] = 11; // Or alter an existing element by assignment.
let empty = []; // [] is an empty array with no elements.
empty.length // => 0

// ======== Arrays and objects can hold other arrays and objects:
let points = [
	{x: 0, y: 0}, // An array with 2 elements.
	{x: 1, y: 1} // Each element is an object.
]

let data = { // An object with 2 properties
	trial1: [[1,2], [3,4]], // Property value is an array of arrays.
	trial2: [[2,3], [4,5]] // The elements of the arrays are arrays.
}

// ======== Operators act on values (the operands) to produce a new value.
// Arithmetic operators are the most common:
3 + 2 // => 5: addition
3 - 2 // => 1: subtraction
3 * 2 // => 6: multiplication
3 / 2 // => 1.5: division
points[1].x - points[0].x // => 1: more complicated operands work, too.
"3" + "2" // => "32": + adds numbers, concatenates strings

// ======== JavaScript defines some shorthand arithmetic operators
let count = 0; // Define a variable
count++; // Increment the variable
count--; // Decrement the variable
count += 2; // Add 2: same as count = count + 2;
count *= 3; // Multiply by 3: same as count = count * 3;
count // => 6: variable names are expressions, too.

// ======== Equality and relational operators test whether two values are equal,
// unequal, less than, greater than, and so on. They evaluate to true or false.
let a = 2, b = 3; // These = signs are assignment, not equality tests
a === b // => false: equality
a !== b // => true: inequality
a < b // => true: less-than
a <= b // => true: less-than or equal
a > b // => false: greater-than
a >= b // => false: greater-than or equal
"two" === "three" // => false: the two strings are different
"two" > "three" // => true: "tw" is alphabetically greater than "th"
false === (a > b) // => true: false is equal to false

// ======== Logical operators combine or invert boolean values
(a === 2) && (b === 3) // => true: both comparisons are true. && is AND
(a > 3) || (b < 3) // => false: neither comparison is true. || is OR
!(a === b) // => true: ! inverts a boolean value

// ======== Functions are parameterized blocks of JavaScript code that we can invoke.
function plus1(x) { // Define a function named "plus1" with parameter "x"
	return x + 1; // Return a value one larger than the value passed in
} // Functions are values and can be assigned to variables

plus1(y) // => 4: y is 3, so this invocation returns 3+1

let square = function(x) { // Functions are values and can be assigned to variables
	return x * x; // Compute the function's value
};

square(plus1(y)) // => 16: invoke two functions in one expression

// ======== Functions can also be defined using arrow notation
const plus2 = x => x + 1; // The input x maps to the output x + 1
const square2 = x => x * x; // The input x maps to the output x * x

plus2(y) // => 4: y is 3, so this invocation returns 3+1
square2(plus1(y)) // => 16: invoke two functions in one expression

// ======== When functions are assigned to the properties of an object, we call them methods.
let c = []; // Create an empty array
c.push(1, 2, 3); // The push() method adds elements to an array
c.reverse(); // Another method: reverse the order of elements
console.log(c); // Prints [3,2,1]

// ======== We can define our own methods, too. The "this" keyword refers to the object on which the method was invoked.
points.dist = function() { // Define a method to compute distance between points
	let p1 = this[0]; // First element of array we're invoked on
	let p2 = this[1]; // Second element of the "this" object
	let a = p2.x-p1.x; // Difference in X coordinates
	let b = p2.y-p1.y; // Difference in Y coordinates
	return Math.sqrt(a*a + b*b); // The Pythagorean theorem, Math.sqrt() computes the square root
}

points.dist() // => Math.sqrt(2): distance between our 2 points

// ======== JavaScript statements include conditionals, loops, and blocks.
function abs(x){
	if (x >= 0) { // The if statement
		return x; // is executed if its condition is true
	} // This is the end of the if clause
	else { // The optional else clause is executed if the condition is false
		return -x;
	} // Curly braces optional when 1 statement per clause
}

abs(-10) === abs(10) // => true

function sum(array) {
	let sum = 0;
	for(let x of array) { // Loop body is executed for each element of the array
		sum += x; // Same as sum = sum + x
	}
}

sum(primes) // => 17: sum of the first 4 primes

function factorial(n) {
	let product = 1;
	while(n > 1) { // While loop to compute the factorial
		product *= n; // Same as product = product * n
		n--; // Same as n = n - 1
	}
	return product;
}

factorial(4) // => 24: 1*4*3*2

function factorial2(n){
	let i, product = 1;
	for(i=2; i <= n; i++) // Initialize; test; update
		product *= i; // Same as product = product * i
	return product;
}

factorial2(5) // => 120: 1*2*3*4*5

class Point { // By convention, class names are capitalized
	constructor(x, y) { // Constructor for initializing new objects
		this.x = x; // This keyword is the new object
		this.y = y; // Initialize object properties
	} // No return statement is necessary in a constructor
	distance() { // Method to compute distance from origin to point
		return Math.sqrt(this.x*this.x +
					this.y*this.y); // This is the same as the previous dist() function
	}
}

// Use the Point() constructor function with "new" to create Point objects
let p = new Point(1, 1); // The geometric point (1,1)

// Now use a method of the Point object p
p.distance() // => Math.SQRT2: the square root of 2