// Map
// map() cria um novo array ao chamar uma função para cada elemento do array.
// map() não executa a função em elementos vazios.
// map() não altera o array original.

// Dobre os numeros
const numeros = [5, 10, 80, 20, 30, 4, 3, 2, 27];
const numerosEmDobro = numeros.map(
    function (valor, indice, array) {
        // console.log(valor, indice, array);
        return valor * 2;
    }
);
console.log(numerosEmDobro);

console.log("----");

// Retorne apenas uma string com o nome da pessoa
const pessoas = [
    { nome: 'Larissa', idade: 25 },
    { nome: 'Ana', idade: 20 },
    { nome: 'Eduarda', idade: 16 },
    { nome: 'Monica', idade: 52 },
    { nome: 'Kleber', idade: 80 },
]
const nomes = pessoas.map(objValor => objValor.nome);
console.log(nomes);

// Remova apenas a chave "nome" do objeto
const remove = pessoas.map(
    function (objValor) {
        delete objValor.nome; // Deletando a chave nome do objeto ou tbm posso dar return { idade: obj.idade } criar um novo obj somente com idade
        return objValor;
    }
)

const remove2 = pessoas.map(obj => ({ idade: obj.idade })); // retornando um objeto em arrow function
console.log(remove2);

// Adicione uma chave id em cada objeto
const comIds = pessoas.map(
    function (obj, indice) {
        // Como estamos trabalhando com objetos passados por referencia, estamos alterando o arr original
        // Para evitar que isso ocorra, crie um novo objeto
        // obj.id = (indice + 1) ; // Adicionei o +1 para n puxar o indice 0

        const newObj = { ...obj };
        newObj.id = (indice + 1);
        return obj;
    }
)

console.log(comIds);

// Agora o objeto original está sem alterações ja que criei um novo em comIds para nao alterar o original
console.log(pessoas);
