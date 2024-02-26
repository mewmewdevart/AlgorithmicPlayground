import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

class Client {
    String name;
    String accountType;
    double balance;

    public Client(String name, String accountType, double balance) {
        this.name = name;
        this.accountType = accountType;
        this.balance = balance;
    }

    public String toString() {
        return "CLIENT INFORMATION FROM THE NATIONAL BANK!\n" +
                "Name: " + name + '\n' +
                "Account Type: " + accountType + '\n' +
                "Current Balance: $" + String.format("%.2f", balance);
    }
}

public class Main {
    static void callTitle() {
        try {
            File myTitleObj = new File("drawTitle.txt");
            Scanner myReader = new Scanner(myTitleObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                System.out.println(data);
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }

    static boolean menuOptions() {
        Client client = clientData();

        try (Scanner scanner = new Scanner(System.in)) {
            int option;

            do {
                System.out.println("Available operations: ");
                System.out.println(
                        """
                                1 - Check balance
                                2 - Receive amount
                                3 - Transfer amount
                                4 - Exit"""
                );
                System.out.println("Enter the desired operation: ");
                option = scanner.nextInt();

                switch (option) {
                    case 1 -> {
                        System.out.println("--------------------------------------------------");
                        System.out.printf(" STATUS : Your current balance: $%.2f \n", client.balance);
                        System.out.println("--------------------------------------------------");
                    }
                    case 2 -> {
                        System.out.println("Enter the amount to receive: ");
                        double addMoney = scanner.nextDouble();
                        client.balance += addMoney;
                        System.out.println("--------------------------------------------------");
                        System.out.printf(" STATUS : Updated balance: $%.2f \n", client.balance);
                        System.out.println("--------------------------------------------------");
                    }
                    case 3 -> {
                        System.out.println("What amount do you want to transfer? ");
                        double removeMoney = scanner.nextDouble();
                        if (client.balance >= removeMoney) {
                            client.balance -= removeMoney;
                            System.out.println("--------------------------------------------------");
                            System.out.printf(" STATUS : Updated balance: $%.2f\n", client.balance);
                            System.out.println("--------------------------------------------------");
                        } else {
                            System.out.println("Insufficient balance for transfer! Please enter a valid amount.");
                        }
                    }
                    case 4 -> {
                        System.out.println("--------------------------------------------------");
                        System.out.println(" STATUS : You have exited! Your account has been closed!");
                        System.out.println("--------------------------------------------------");
                    }
                    default -> System.out.println("Invalid option! Please try again!");
                }
            } while (option != 4);
        }

        return false;
    }

    static Client clientData() {
        String clientName = "Larissa Cristina Benedito";
        String clientAccountType = "Current";
        double clientBalance = 2500.0;

        return new Client(clientName, clientAccountType, clientBalance);
    }

    public static void main(String[] args) {
        boolean applicationContinue;

        do {
            Client client = clientData();
            callTitle();

            System.out.println("--------------------------------------------------");
            System.out.println(client);
            System.out.println("--------------------------------------------------");

            applicationContinue = menuOptions();
        } while (applicationContinue);
    }
}