# React - The Complete Guide 2024 (incl. Next.js, Redux)

## 01.Getting Started

### What is React.js? And Why Would You Use It?

- A JavaScript library for building user interfaces

```plaintext
[JS] -> [React] -> [Netflix]
```

- React builds on JavaScript (it's a library).
- As a React developer, you will write React-specific JavaScript code.

## Declarative vs Imperative

### In React - Declarative

Define the goal, not the steps:

```jsx
let content;
if (user.isLoggedIn) {
  content = <button>Continue</button>;
} else {
  content = <button>Log In</button>;
}
```

### In JavaScript - Imperative

Define the steps, not the goal:

```javascript
let btn = document.querySelector("button");

if (user.isLoggedIn) {
  btn.textContent = "Continue";
} else {
  btn.textContent = "Log In";
}

document.body.append(btn);
```

https://github.com/academind/react-complete-guide-course-resources

## 02.Javascript Refresher

Javascript can be executed in many environments

- Browser (as part of websites):
  JavaScript code can be included in any website. The code then executes inside the browser (i.e., on the machine of the website visitor).

- Computer (server side code)
  Because of Node.js or Deno, JavaScript code can be executed outside of the browser. The code then executes directly on the machine.

- Mobile (via embedded websites)
  With extra technologies like Capacitor or React Native, you can build mobile apps based on JavaScript. The code then executes on the mobile device.

Here's the revised version with improved clarity and structure:

### Adding JavaScript Code to a Website

JavaScript code can be added to a website between `<script>` tags:

```html
<script>
  alert("hello");
</script>
```

However, this approach can quickly lead to unmaintainable and complex HTML files.

Alternatively, you can link to an external JavaScript file. This method is typically used for very short scripts:

```html
<script src="script.js"></script>
```

Linking to an external file separates HTML and JavaScript code, making it easier to maintain complex JavaScript-powered applications.

## Importações

A diferença entre importar com e sem `{}` está relacionada ao tipo de exportação que você está utilizando no módulo que está sendo importado.

### Importação com `{}`

```javascript
import { apiKey } from "./utils.js";
```

- Utilizada para importar exportações nomeadas.
- Você deve usar o nome exato da variável/exportação que foi exportada com `export` (não `export default`).

**Exemplo em `utils.js`**:

```javascript
export let apiKey = "larissa";
export let anotherKey = "example";
```

**Importação em outro arquivo**:

```javascript
import { apiKey, anotherKey } from "./utils.js";
console.log(apiKey); // "larissa"
console.log(anotherKey); // "example"
```

### Importação sem `{}`

```javascript
import apiKey from "./utils.js";
```

- Utilizada para importar a exportação padrão (`default export`).
- Você pode dar qualquer nome à importação, pois não precisa corresponder ao nome da variável exportada.

**Exemplo em `utils.js`**:

```javascript
export default "cristina";
```

**Importação em outro arquivo**:

```javascript
import apiKey from "./utils.js";
console.log(apiKey); // "cristina"
```

### Combinação de Ambas

Você também pode combinar ambas as formas para importar tanto a exportação padrão quanto as exportações nomeadas:

**Exemplo em `utils.js`**:

```javascript
export let apiKey = "larissa";
export default "cristina";
```

**Importação em outro arquivo**:

```javascript
import defaultExport, { apiKey } from "./utils.js";
console.log(defaultExport); // "cristina"
console.log(apiKey); // "larissa"
```

Em resumo:

- **Com `{}`**: Para exportações nomeadas.
- **Sem `{}`**: Para exportação padrão (`default export`).

O uso de `*` no import é chamado de importação de namespace. Isso permite importar todo o conteúdo de um módulo em um único objeto. Aqui está um exemplo em formato Markdown:

### Importação com `*`

```javascript
import * as utils from "./utils.js";
```

- Utilizada para importar todo o conteúdo de um módulo em um único objeto, geralmente chamado de namespace.
- O objeto `utils` contém todas as exportações do módulo `utils.js`.

**Exemplo em `utils.js`**:

```javascript
export let apiKey = "larissa";
export let anotherKey = "example";
```

**Importação em outro arquivo**:

```javascript
import * as utils from "./utils.js";
console.log(utils.apiKey); // "larissa"
console.log(utils.anotherKey); // "example"
```

Com a importação de namespace, você pode acessar todas as exportações do módulo através do objeto `utils`. Isso é útil quando você tem muitas exportações e deseja evita o conflito de nomes.

## Arrow Function/ Função de Seta

### 1) Omitindo os parênteses da lista de parâmetros

```javascript
// Em vez de
(userName) => { ... }

// você pode escrever
userName => { ... }
```

Por favor, note:

- Se sua função não tiver parâmetros, os parênteses não devem ser omitidos - `() => { ... }` é a única forma correta nesse caso.

- Se sua função tiver mais de um parâmetro, você também não deve omitir os parênteses - `userName, userAge => { ... }` seria inválido (`(userName, userAge) => { ... }` é correto)!

### 2) Omitindo as chaves do corpo da função

Se sua arrow function não contiver outra lógica além de uma instrução de retorno, você pode omitir as chaves e a palavra-chave `return`.

```javascript
// Em vez de
(number) => {
  return number * 3;
};

// você pode escrever
(number) => number * 3;
```

O código a seguir seria inválido:

```javascript
number => return number * 3; // inválido porque a palavra-chave return também deve ser omitida!
number => if (number === 2) { return 5 }; // inválido porque declarações if não podem ser retornadas
```

### 3) Caso especial: Retornando um objeto

Se você optar pela alternativa mais curta explicada em 2) e estiver tentando retornar um objeto JavaScript, pode acabar com o seguinte código inválido:

```javascript
(number) => {
  age: number;
}; // tentando retornar um objeto
```

Esse código seria inválido porque o JavaScript trata as chaves como delimitadores do corpo da função (e não como código que cria um objeto JS).

Para "informar" ao JavaScript que um objeto deve ser criado (e retornado), o código precisaria ser ajustado assim:

```javascript
(number) => ({ age: number }); // envolvendo o objeto em parênteses extras
```

Ao envolver o objeto e suas chaves com um par de parênteses extras, o JavaScript entende que as chaves não estão lá para definir o corpo da função, mas sim para criar um objeto. Assim, esse objeto é retornado.

## Destruturação

A **Destruturação** em JavaScript permite extrair valores de arrays ou propriedades de objetos e atribuí-los a variáveis de forma concisa e legível. Essa técnica torna o código mais limpo e expressivo, permitindo desempacotar valores de arrays ou objetos em variáveis separadas.

### Exemplos:

#### Destruturação de Arrays:

```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
```

#### Destruturação de Objetos:

```javascript
const user = { name: "Alice", age: 30 };
const { name, age } = user;

console.log(name); // Output: Alice
console.log(age); // Output: 30
```

A destruturação permite extrair valores específicos de arrays ou propriedades de objetos e atribuí-los a variáveis sem a necessidade de acessar os elementos ou propriedades diretamente.

### Destruturação em Listas de Parâmetros de Funções

A desestruturação em listas de parâmetros de funções permite extrair as propriedades de um objeto passado como parâmetro e disponibilizá-las como variáveis locais dentro do escopo da função.

#### Exemplo:

```javascript
function armazenarPedido(pedido) {
  localStorage.setItem("id", pedido.id);
  localStorage.setItem("moeda", pedido.moeda);
}
```

Em vez de acessar as propriedades do objeto `pedido` via "notação de ponto" dentro do corpo da função `armazenarPedido`, podemos usar a desestruturação:

```javascript
function armazenarPedido({ id, moeda }) {
  // desestruturação
  localStorage.setItem("id", id);
  localStorage.setItem("moeda", moeda);
}
```

A sintaxe de desestruturação é a mesma ensinada anteriormente - sem a necessidade de criar constantes ou variáveis manualmente. As variáveis `id` e `moeda` são extraídas do objeto passado como argumento para `armazenarPedido`.

É importante notar que `armazenarPedido` ainda aceita apenas um parâmetro - um objeto que é desestruturado internamente. Portanto, ao chamá-lo, passamos apenas um objeto:

```javascript
armazenarPedido({ id: 5, moeda: "USD", valor: 15.99 }); // um argumento / valor!
```

### Spread Operator

O operador de propagação (`spread operator`) é uma funcionalidade do JavaScript que permite expandir uma expressão em locais onde múltiplos argumentos ou elementos são esperados. Ele é denotado por três pontos (`...`). O operador de propagação pode ser usado em arrays, objetos e em contextos de chamada de função.

#### Arrays:

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
```

#### Objetos:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }
```

#### Chamada de Função:

```javascript
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);
console.log(result); // Output: 6
```

O operador de propagação simplifica a manipulação de arrays, objetos e argumentos de função, permitindo a fácil combinação de elementos em novas estruturas ou a passagem de múltiplos argumentos para funções que esperam argumentos separados.


### Basic For Loop

```javascript
const comidas = ["Arroz", "Feijão", "Sopa", "Pizza"];

for (let i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);
}
```

### For...of Loop

```javascript
const comidas = ["Arroz", "Feijão", "Sopa", "Pizza"];

for (const comida of comidas) {
    console.log(comida);
}
```

### For...in Loop (for iterating over object properties)

```javascript
const pessoa = {
    nome: "João",
    idade: 25,
    profissao: "Desenvolvedor"
};

for (const propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}
```

### Nested For Loops (looping through a 2D array)

```javascript
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}
```

These examples showcase different ways you can utilize for loops in JavaScript, whether it's for iterating over arrays, objects, or nested data structures.

<!--- map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice 
>