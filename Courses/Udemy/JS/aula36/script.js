const frutas = ['Pera','Maça', 'Uva']

// For in -> Le os indices (arrays) ou chaves do objeto
for (let indice in frutas){
    console.log(frutas[indice]);
}

const pessoa = {
    nome: 'Larissa',
    idade: '25'
}



for (let chave in pessoa){
   // console.log(pessoa.nome);  => Mesma coisa que pessoa['nome]
    console.log(chave, pessoa[chave])
}