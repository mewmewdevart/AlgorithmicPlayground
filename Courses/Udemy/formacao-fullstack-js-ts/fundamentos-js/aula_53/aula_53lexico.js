const external = () => {
    const book = "Turma da monica!";

    const internal = () => {
        console.log(book.toUpperCase());
    }

    internal(); // => Invocado a internal dentro de external para conseguir acessa-la fora do bloco
}

external(); // => External nao tem um retorno


Escopo lexico: Funções aninhadas, estarem sujeitas a buscarem variaveis a um escopo acima do delas (de fora para dentro e nao de dentro pra fora)

Quando voce usa uma variação dentro de uma função, se essa variavel nao for declarada dentro da funcao, ela será buscada no escopo acima.