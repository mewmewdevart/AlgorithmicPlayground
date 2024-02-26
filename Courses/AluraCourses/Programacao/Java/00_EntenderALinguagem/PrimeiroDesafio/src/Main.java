// Definição da classe principal
public class Main {
    // Método principal
    public static void main(String[] args) {
        // Criação de uma instância da classe Perfil
        Perfil perfil = new Perfil();
        // Chama o método getNome da instância Perfil para obter o nome
        String nome = perfil.getNome();
        // Imprime uma saudação usando o nome obtido
        System.out.printf("Hello %s%n", nome);
        System.out.println("Tudo bem?");

        // Criação de uma instância da classe Estudos
        Estudos estudos = new Estudos();
        estudos.exibirMensagem();

        // Criação de uma instância da classe Soma
        Soma soma = new Soma();
        Integer resultSoma = soma.getResult();
        System.out.printf("A soma de 10 + 5 é %d%n", resultSoma);

        Subtracao subtracao = new Subtracao();
        Integer resultSubs = subtracao.getSubs();
        System.out.printf("O resultado da subtração de 10 - 5 é : %d%n", resultSubs);
    }
}
