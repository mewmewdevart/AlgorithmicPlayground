
// Nao exiba o tipo de erro para o usuario por questao de segurança

try { // Tente tal coisa
    console.log(naoExiste);
} catch(err) { // Se nao existir ira exibir isso
    console.log("fudeu");
    // console.log(err); // => exibe a msg de erro
}

function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('X e Y precisam ser numeros!');
    }
    return (x + y);
}

try {
    console.log(soma(1, 'n'));
} catch (err) {
    console.log(err);
}