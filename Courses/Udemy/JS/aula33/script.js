const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: { // Objeto dentro de outro objeto
        rua: 'Av. Brasil',
        numero: 20
    }
}

 // Atribuição via desestruturação
// const { nome = 'Não existe', sobrenome, idade } = pessoa;

// const { nome: teste = '', sobrenome, idade } = pessoa;
// console.log(teste, sobrenome, idade)

// const { endereco: { rua, numero} } = pessoa;
// console.log(rua, numero) // => Av. BRASIL 20

const { nome, ...resto} = pessoa;
console.log(nome, resto); 