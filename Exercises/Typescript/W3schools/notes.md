## TypeScript Simple Types

There are three main primitives in JavaScript and TypeScript:

- **boolean**: True or false values.
- **number**: Whole numbers and floating-point values.
- **string**: Text values like "TypeScript Rocks".

Additionally, there are 2 less common primitives used in later versions of JavaScript and TypeScript:

- **bigint**: Whole numbers and floating-point values, but allows larger negative and positive numbers than the number type.
- **symbol**: Used to create a globally unique identifier.

### Type Assignment

When creating a variable, TypeScript assigns a type in two main ways:

#### Explicit Type:

```typescript
let firstName: string = "Larissa";
```

#### Implicit Type:

```typescript
let secondName = "Cristina";
```

#### ❌ Error in Type Assignment:

```typescript
let firstName: string = "Dylan"; // Type string
firstName = 33; // Attempts to reassign the value to a different type
```

#### ❓ Unable to Infer:

```typescript
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);
```

## TypeScript Special Types

TypeScript has special types that may not refer to any specific type of data.

### Type `any`

The example below does not use `any` and will throw an error:

```typescript
let u = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
```

Setting `any` to the special type `any` disables type checking:

```typescript
let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
```

⚠️ `any` can be a useful way to bypass errors since it disables type checking, but TypeScript will not be able to provide type safety, and tools that rely on type data, such as auto-completion, will not work. Remember, it should be avoided at "any" cost...

### Type `unknown`

TypeScript will prevent unknown types from being used, as shown in the below example:

```typescript
let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
```

⚠️ `unknown` is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it. Casting is when we use the "as" keyword to say property or variable is of the casted type.

### Type `never`

`never` effectively throws an error whenever it is defined.

```typescript
let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
```

⚠️ `never` is rarely used, especially by itself; its primary use is in advanced generics.

### Type `undefined` & `null`

`undefined` and `null` are types that refer to the JavaScript primitives undefined and null respectively.

```typescript
let y: undefined = undefined;
let z: null = null;
```

ℹ️ These adjustments provide better organization and clarity, ensuring that each section is easily understandable and visually appealing.

//to be continue: https://www.w3schools.com/typescript/typescript_arrays.php