public class Main {
    public static void main(String[] args) {
        // Título do programa
        System.out.println("Conversao de temperatura");

        // Temperatura em graus Celsius
        int celsius = 31;

        // Fórmula de conversão de Celsius para Fahrenheit
        double fahrenheit = (celsius * 1.8) + 32;

        // Exibição da temperatura em Fahrenheit com casting para int (sem casas decimais)
        System.out.println("Temperatura em Fahrenheit: " + (int)fahrenheit);
    }
}
