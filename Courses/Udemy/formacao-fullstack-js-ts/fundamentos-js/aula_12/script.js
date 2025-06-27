let varA = 'A';
let varB = 'B';
let varC = 'C';
let temp;
console.log("Antes do swap: ", varA, varB, varC)

temp = varA;
varA = varB;
varB = varC;
varC = temp;

console.log("O resultado do swap é ", varA, varB, varC)