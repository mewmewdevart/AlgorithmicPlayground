// -------------------
// Array de strings
// -------------------

const nome = ['Larissa', 'Cristina'];

// --- FOR clássico ---
// Ideal para quando você precisa de controle sobre o índice
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log("------");

// --- FOR...IN com Array ---
// Itera sobre os índices (chaves numéricas)
for (let i in nome) {
    console.log(nome[i]); // i é o índice
}

console.log("------");

// --- FOR...OF com Array ---
// Itera diretamente sobre os valores
for (let valor of nome) {
    console.log(valor);
}

console.log("------");

// --- forEach com Array ---
// Método funcional do array
nome.forEach(function(elemento, indice, array) {
    console.log(elemento, indice, array);
});

console.log("====== OBJETO ======");

// -------------------
// Objeto com chave-valor
// -------------------

const pessoa = {
    primeiroNome: 'Larissa',
    ultimoNome: 'Cristina',
    idade: 25
};

// --- FOR...IN com Objeto ---
// Ideal para objetos, retorna as chaves
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

console.log("------");

// Não funciona com FOR...OF diretamente em objeto sem conversão
// Para percorrer valores ou pares, podemos usar:

// --- Object.keys() ---
// Percorre apenas as chaves
Object.keys(pessoa).forEach(chave => {
    console.log(chave, pessoa[chave]);
});

console.log("------");

// --- Object.entries() ---
// Percorre pares [chave, valor]
for (let [chave, valor] of Object.entries(pessoa)) {
    console.log(chave, valor);
}
