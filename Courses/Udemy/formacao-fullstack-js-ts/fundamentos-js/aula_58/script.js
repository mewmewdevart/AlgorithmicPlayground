// Funcao construtura -> objetos
// Funcao fabrica -> objetos

// Construtora -> Pessoa (new) : Letra maiuscula por padrao

function Pessoa(nome, sobrenome){
    // Atributos e metodos privados
    const ID = 10101;
    const metodoIntern = function(){ //nao está disponivel fora do construtor: util para validações

    }

    this.nome = nome; // criando uma chame no objeto como se fosse "Pessoa.nome = "
    this.sobrenome = sobrenome; // atributo publico

    this.metodo = () => { // metodo publico
        console.log(this.nome + ': Sou um método');
    };
}

// Obrigatoriamente as construções precisam de new
const p1 = new Pessoa('Luiza', 'Otavio');
const p2 = new Pessoa('Larissa', 'Cristina');

p1.metodo();