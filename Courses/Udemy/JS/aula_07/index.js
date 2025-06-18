// Ao criar já inicialize a const (não é obrigatório, mas é uma boa prática quando o valor já é conhecido)
const name = "Larissa"; 

// Exibe o valor da constante no console
console.log(name); 

// Tentar reatribuir valor a uma constante causa erro
// name = "Cristina"; ❌ Erro: Assignment to constant variable

// Esta linha nem será executada por causa do erro acima
console.log(name);



// Declaração e inicialização das constantes
const firstNumber = 5;
const secondNumber = 10;

// Operações matemáticas básicas
console.log("Adição:", firstNumber + secondNumber);
console.log("Subtração:", firstNumber - secondNumber);
console.log("Multiplicação:", firstNumber * secondNumber);
console.log("Divisão:", firstNumber / secondNumber);

// Operações extras
console.log("Resto da divisão (módulo):", firstNumber % secondNumber);
console.log("Exponenciação:", firstNumber ** 2); // Exemplo: firstNumber elevado ao quadrado

// Operações com resultado de mais de uma expressão
const total = (firstNumber + secondNumber) * 2;
console.log("Resultado de (firstNumber + secondNumber) * 2:", total);

// Exemplo com incremento manual
let increment = firstNumber;
increment++; // Incrementa 1
console.log("Incremento de firstNumber:", increment);

// Exemplo com decremento manual
let decrement = secondNumber;
decrement--; // Decrementa 1
console.log("Decremento de secondNumber:", decrement);

let changeFirstNumber = '5';
console.log("changeFirstNumber + secondNumber concatenados = ", changeFirstNumber + secondNumber);
console.log(typeof changeFirstNumber + typeof secondNumber);