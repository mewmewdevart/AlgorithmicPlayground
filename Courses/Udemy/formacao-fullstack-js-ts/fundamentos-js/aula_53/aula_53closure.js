// Closure é quando uma função "lembra"
// Seu escopo é lexico, mesmo quando a funcao é executada fora desse escopo lexico

const x = 20;

function Tres(){
    let x = 50;

    function somaXMais3(){
        return (x + 3);
    }

    return (somaXMais3());
}

const soma = Tres();
console.log(soma);