// 1. Declaração de função (Function Hoisting)
function falaOI() {
    console.log('Oie');
}

falaOI(); 
// Posso chamar a função **antes ou depois** da sua declaração.
// Isso é possível graças ao **hoisting**, que "eleva" declarações de função ao topo do escopo.
// ⚠️ Esse comportamento vale apenas para **funções declaradas com function**.

// -------------------------------------------------------------

// 2. Funções são First-Class Objects (Objetos de Primeira Classe)

const souUmDado = function() {
    console.log('Sou um dado');
};

souUmDado(); 
// Funções podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções.
// Isso significa que em JavaScript, funções são tratadas como dados.
// A variável `souUmDado` agora se comporta como uma função.


// 3. Passando funções como argumento (Funções de primeira classe em ação)
function executaUmaFuncao(funcaoPassadaComoParametro) {
    funcaoPassadaComoParametro();
}

executaUmaFuncao(souUmDado); 
// Estamos passando a função `souUmDado` como argumento.
// Isso é possível porque funções são objetos de primeira classe.


// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}

funcaoArrow();

// Dentro de um objeto
const obj = {
    // falar: function (){
    falar(){ // Posso chamar uma funcao dentro de um objeto tanto como o comentario acima como essa linha
        console.log('Estou falando...');
    }
}

obj.falar();