import java.util.Scanner;

public class ativ09 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String nomeMaisNova = null;
        int idadeMaisNova = Integer.MAX_VALUE;

        int i = 1;

        while ( i <= 10) {
            System.out.println("Escreva o nome da pessoa " + i + ": ");
            String nome = scanner.nextLine();

            System.out.println("Escreva a idade da pessoa " + i + ": ");
            int idade = scanner.nextInt();
            scanner.nextLine();

            if (idade < idadeMaisNova) {
                idadeMaisNova = idade;
                nomeMaisNova = nome;
            }
         i++;
        }

        scanner.close();

        System.out.println("A pessoa mais nova e " + nomeMaisNova + " com " + idadeMaisNova + " anos");
    }
}