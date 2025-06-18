// Exemplo 1: Usando aspas duplas dentro de uma string com aspas duplas
let umaString = "Um \"caractere\" de escape";
console.log(umaString);
// Saída: Um "caractere" de escape
// Explicação: Usamos \" para que as aspas internas não terminem a string

// Exemplo 2: Incluindo uma quebra de linha com \n
let quebraLinha = "Linha 1\nLinha 2";
console.log(quebraLinha);
// Saída:
// Linha 1
// Linha 2
// Explicação: \n cria uma nova linha

// Exemplo 3: Tabulação horizontal com \t
let tabulacao = "Nome:\tLarissa";
console.log(tabulacao);
// Saída: Nome:	Larissa
// Explicação: \t insere um espaço de tabulação (como um Tab)

// Exemplo 4: Barra invertida com \\ (para mostrar uma barra mesmo)
let barraInvertida = "Este é um caminho: C:\\Users\\Larissa";
console.log(barraInvertida);
// Saída: Este é um caminho: C:\Users\Larissa
// Explicação: Usamos \\ para exibir uma barra invertida real

// Exemplo 5: Caractere de apóstrofo dentro de uma string com aspas simples
let aspasSimples = 'Isto é um exemplo de \'caractere\' de escape';
console.log(aspasSimples);
// Saída: Isto é um exemplo de 'caractere' de escape
// Explicação: Usamos \' para escapar a aspa simples dentro da string de aspas simples

// Exemplo 6: Usando o caractere de retorno de carro (\r)
let retornoCarro = "Linha 1\rLinha 2";
console.log(retornoCarro);
// Em alguns terminais a saída será: Linha 2
// Explicação: \r faz o cursor voltar ao início da linha e sobrescrever o conteúdo

// Exemplo 7: Escape Unicode (\u)
let unicode = "\u2764";  // Código Unicode para um coração ❤
console.log(unicode);
// Saída: ❤
// Explicação: \uXXXX onde XXXX é o código Unicode

// Exemplo 8: Escape hexadecimal (\x)
let hexadecimal = "\x48\x69";
console.log(hexadecimal);
// Saída: Hi
// Explicação: \x48 é 'H' e \x69 é 'i'

let outraString = "Um Texto";

// Procurando a posição da primeira ocorrência da letra "x"
console.log(outraString.search(/x/)); 
// Saída esperada: 4 (porque o "x" está na posição 4 da string "Um Texto")

// Pegando todas as letras minúsculas de a-z
console.log(outraString.match(/[a-z]/g)); 
// Saída esperada: ['m', 'e', 'x', 't', 'o']
// Obs: Aqui o método correto é .match(), não dá pra usar regex direto dentro de console.log como estava antes

// Substituindo a palavra "Um" por "Outra"
console.log(outraString.replace(/Um/, 'Outra')); 
// Saída: "Outra Texto"


let frase = "O rato roeu a roupa do rei de roma!";

// Substituindo todas as letras "r" minúsculas por "#"
console.log(frase.replace(/r/g, '#')); 
// Saída: "O #ato #oeu a #oupa do #ei de #oma!"
// Explicação: A regex /r/g pega todos os "r" minúsculos (por conta do "g" de global).
