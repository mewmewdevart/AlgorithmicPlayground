import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int randomNumber = new Random().nextInt(100);
        Scanner leitura = new Scanner (System.in);
        int tentativas = 0;

        //System.out.println(randomNumber);

        while (true) {
            System.out.println("Adivinhe um numero inteiro: ");
            int userNumber = leitura.nextInt();

            tentativas++;
            if (userNumber == randomNumber) {
                System.out.printf("Você acertou o numero gerado : %d em %d tentativas!", randomNumber, tentativas);
            } else if (userNumber < 0 || userNumber > 100) {
                System.out.println("Por favor, insira apenas numeros entre 0 e 100!");
            } else if (userNumber < randomNumber) {
                System.out.println("O numero digitado é menor do que o numero gerado!");
            } else {
            System.out.println("O numero digitado é maior do que o numero gerado!");
            }
            if (tentativas == 5) {
                System.out.println("Você não conseguiu adivinhar o número em 5 tentativas. O número era " + randomNumber);
                break;
            }
        }
    }
}