public class Main {
    public static void main(String[] args) {
        System.out.println("Desafio: Hora da Prática");

        System.out.println("======== Crie um programa que realize a média de duas notas decimais e exiba o resultado.");
        double nota1 = 10;
        double nota2 = 3;
        double media = (double)(nota1 + nota2) / 2;
        System.out.println(media);

        System.out.println("======== Declare uma variável do tipo double e uma variável do tipo int. Faça o casting da variável double para int e imprima o resultado.");
        int variavelInt = 10;
        double variavelDouble = 20.5;
        // String.format ou System.out.printf para formatar strings com espaços reservados
        System.out.printf("%d e %f \n", (int) variavelDouble, (double) variavelInt);

        System.out.println("======== Declare uma variável do tipo char (letra) e uma variável do tipo String (palavra). Atribua valores a essas variáveis e concatene-as em uma mensagem.");
        char variavelChar = 'a';
        String variavelString = "abc";
        System.out.printf("Essa é a variável char: %c e essa é a variável string: %s \n", variavelChar, variavelString);

        System.out.println("======== Declare uma variável do tipo double precoProduto e uma variável do tipo int (quantidade). Calcule o valor total multiplicando o preço do produto pela quantidade e apresente o resultado em uma mensagem.");
        double precoProduto = 5.3;
        int quantidade = 2;
        System.out.printf("%f x %d = %f \n", precoProduto, quantidade, (precoProduto * quantidade));

        System.out.println("======== Declare uma variável do tipo double valorEmDolares. Atribua um valor em dólares a essa variável. Considere que o valor de 1 dólar é equivalente a 4.94 reais. Realize a conversão do valor em dólares para reais e imprima o resultado formatado.");
        double precoUmDolar = 4.94;
        double dolar = 5;
        double reais = 0;
        reais = precoUmDolar * dolar;
        System.out.printf("%.2f dólares equivalem a %.2f reais \n", dolar, reais);

        System.out.println("======== Declare uma variável do tipo double precoOriginal. Atribua um valor em reais a essa variável, representando o preço original de um produto. Em seguida, declare uma variável do tipo double percentualDesconto e atribua um valor percentual de desconto ao produto (por exemplo, 10 para 10%). Calcule o valor do desconto em reais, aplique-o ao preço original e imprima o novo preço com desconto. ");
        double precoOriginal = 5.50;
        double percentualDesconto = 0.10;

        double valorDesconto = precoOriginal * percentualDesconto;
        double novoPreco = precoOriginal - valorDesconto;
        System.out.printf("Preco original: %.2f com desconto de %.2f totalizando %.2f", precoOriginal, valorDesconto, novoPreco);

    }
}
