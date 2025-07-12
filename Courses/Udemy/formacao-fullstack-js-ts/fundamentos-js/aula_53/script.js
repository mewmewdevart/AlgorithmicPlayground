// global
function retornaFuncao(){
    const nome = 'Luiz';

    return function (){ // Retornando uma funcao 
        return nome;
    }
}

const funcao = retornaFuncao();

console.log(funcao); // => [Function (anonymous)]

// Habilidade da função de acessar o escopo lexico dela