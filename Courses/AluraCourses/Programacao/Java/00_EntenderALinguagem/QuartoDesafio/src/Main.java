import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner number= new Scanner(System.in);

        System.out.println("Digite um numero para saber se ele é positivo ou negativo: ");
        int numberStatus = number.nextInt();
        if (numberStatus >= 0)
            System.out.println("Numero positivo!");
        else
            System.out.println("Numero negativo!");

        System.out.println("============\n");

        System.out.println("Insira dois numeros inteiros: ");
        int number1 = number.nextInt();
        int number2 = number.nextInt();

        if (number1 > number2)
            System.out.printf("O numero %d é maior do que o %d\n", number1, number2);
        else if (number1 < number2)
            System.out.printf("O numero %d é menor que o %d\n", number1, number2);
        else
            System.out.println("Os numeros são iguais!");

        System.out.println("============\n");

        System.out.println("Insira um numero para que possa ser exibida a tabuada d 1 até o 10!");
        int numberTabuada = number.nextInt();
        int i = 1;

        while(i <= 10)
        {
            System.out.printf("%d x %d = %d\n", numberTabuada, i, numberTabuada * i);
            i++;
        }

        System.out.println("============\n");

        System.out.println("Digite um numero inteiro para saber se é impar ou par: ");
        int numberChecker = number.nextInt();

        if (numberChecker%2 == 0)
            System.out.println("Par!");
        else
            System.out.println("Impar");

        System.out.println("============\n");

        System.out.println("Digite um número para saber o seu fatorial: ");
        int numberFatorial = number.nextInt();
        int store = numberFatorial;
        int result = 1;

        if (numberFatorial >= 1) {
            while (numberFatorial > 0) {
                result *= numberFatorial;
                numberFatorial--;
            }
        } else {
            result = 1;
        }

        System.out.printf("O fatorial de %d é %d!", store, result);

        number.close();
    }
}