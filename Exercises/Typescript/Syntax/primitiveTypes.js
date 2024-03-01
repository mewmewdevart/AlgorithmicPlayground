// Esse file foi gerado através de primitiveTypes.ts

/* 1. Declaração de Variáveis:
    Declare uma variável para cada tipo primitivo em TypeScript (number, string, boolean, null, undefined) e atribua um valor a cada uma delas. Em seguida, imprima o tipo e o valor de cada variável. */
var numero;
var character;
var isTrue;
var isNull; // O tipo null é uma extensão do tipo object, não um tipo primitivo. Portanto, ao atribuir null a uma variável, é necessario usar null como parte de uma união de tipos
var isUndefined;
numero = 6;
character = "larissa";
isTrue = true;
isUndefined = undefined;
console.log("numero: " + numero + ", caractere: " + character + ", é verdade: " + isTrue + ", é indefinido: " + isUndefined);
console.log("numero: ".concat(numero, ", caractere: ").concat(character, ", \u00E9 verdade: ").concat(isTrue, ", \u00E9 indefinido: ").concat(isUndefined));
console.log("====================================================");
/* 2. Operações com Números:
   Crie uma função que receba dois números como parâmetros e retorne a soma deles. Teste a função com diferentes tipos de números (inteiros, decimais). */
var inteiroA = 5;
var inteiroB = 3;
var decimalA = 5.232;
var decimalB = 3.232; // let outroDecimal = 1.2345;
var sum = inteiroA + inteiroB;
console.log(sum); // => 8
console.log(decimalA + decimalB); // => 8.464
console.log(decimalA + decimalB + inteiroA + inteiroB); // => 16.464
console.log("====================================================");
/* 3. Manipulação de Strings:
   Crie uma função que receba uma string como parâmetro e retorne a mesma string em maiúsculas. Teste a função com diferentes strings. */
var str = "larissa";
console.log("Usando a funcao toUppercase: " + str.toUpperCase()); // => LARISSA
console.log("Usando a funcao toLowercase: " + str.toLowerCase()); // => larissa
function convertUpper(str) {
    var i = 0;
    var len = str.length;
    var chars = str.split('');
    while (i < len) {
        if (chars[i] >= 'a' && chars[i] <= 'z')
            chars[i] = chars[i].toUpperCase();
        i++;
    }
    return chars.join('');
}
console.log("Maiusculas: " + convertUpper(str)); // => LARISSA
function convertBoth(str) {
    var i = 0;
    var len = str.length;
    var chars = str.split(''); // Divide uma string em substrings com base no separador '' e retorna um array contendo essas substrings
    while (i < len) {
        if ((i % 2) === 0 && chars[i] >= 'a' && chars[i] <= 'z')
            chars[i] = chars[i].toUpperCase();
        else
            chars[i] = chars[i].toLowerCase();
        i++;
    }
    return chars.join('');
}
console.log("Ambos: " + convertBoth(str)); // => LaRiSsA
console.log("====================================================");
/* 4. Verificação de Booleanos:
   Crie uma função que receba um valor booleano como parâmetro e retorne o oposto desse valor (ou seja, se recebe true, retorna false e vice-versa). */
function isCool(type) {
    if (type === true)
        return (false);
    else
        return (true);
}
console.log("Do we live in an alternate reality? " + isCool(false)); // => true
console.log("Are you sure?? " + isCool(true)); // => false
function isTop(type) {
    return (type ? true : false);
}
console.log("Do we live in an alternate reality? " + isCool(true)); // => false
console.log("Are you sure?? " + isCool(false)); // => true
console.log("====================================================");
/* 5. Checagem de Tipos:
   Crie uma função que receba um parâmetro e verifique se é do tipo string. Se for uma string, imprima "É uma string", caso contrário, imprima "Não é uma string". */
function isString(word) {
    if (typeof word === 'string') // Checar se a variável é do tipo string : typeof para checar o tipo
        return "É uma string!";
    return "Não é uma string";
}
console.log(isString("whatsup")); // => "É uma string!"
console.log(isString(123)); // => "Não é uma string"
console.log("====================================================");
/* 6. Trabalhando com Null e Undefined:
   Declare uma variável e atribua a ela o valor null. Em seguida, declare outra variável e não atribua nenhum valor a ela (o valor será undefined por padrão). Imprima o tipo e o valor de cada variável. */
var nulo = null;
var indefinido;
console.log(nulo);
console.log(indefinido);
var indefinido2;
// let indefinido2: undefined = 3; => Nao é permitido
console.log(indefinido2); // => undefined : Quando não atribuimos um tipo, o seu valor é indefinido
var indefinido3 = 2; // Sem adicionar um tipo, mas inicializando o tipo é "captado".
console.log(indefinido3); // => 2
console.log("====================================================");
/* 7. Operadores de Comparação:
   Crie uma função que receba dois parâmetros e verifique se são do mesmo tipo e têm o mesmo valor. A função deve retornar true se forem iguais e false caso contrário. */
function checkType(typeA, typeB) {
    return typeA === typeB;
}
console.log(checkType(2, "larissa")); // => false
console.log(checkType(2, 2)); // => true
console.log("====================================================");
/* 8. Conversão de Tipos:
   Crie uma função que receba um parâmetro do tipo number e converta-o para string. Em seguida, teste a função com diferentes valores numéricos. */
var typeNumber = 2;
function itoa(numero) {
    return (numero.toString());
}
console.log("toString: " + itoa(typeNumber)); // => "2"
console.log("toString: " + itoa(3)); // => "3"
console.log("toString: " + itoa(3.553)); // => "3.553"
console.log("====================================================");
/* 9. Uso de Template Literals:
   Crie uma função que receba dois parâmetros (nome e idade) e retorne uma frase usando template literals, por exemplo: "Olá, meu nome é {nome} e tenho {idade} anos." */
function templateLiterals(nome, idade) {
    return ("Ol\u00E1, meu nome \u00E9 ".concat(nome, " e tenho ").concat(idade, " anos.")); // => Use aspas simples ` ` para retornar o template literals
}
console.log(templateLiterals("larissa", 24)); // => Olá, meu nome é larissa e tenho 24 anos.
console.log("====================================================");
/* 10. Valores Falsy e Truthy:
   Crie uma função que receba um parâmetro e verifique se é considerado um valor truthy ou falsy em JavaScript. Imprima uma mensagem indicando se é truthy ou falsy. */
function receba(parametro) {
    if (parametro)
        return "É truthy";
    return "É falsy";
}
console.log(receba("carne")); // => É truthy
console.log(receba(true)); // => É truthy
console.log(receba(false)); // => É falsy
