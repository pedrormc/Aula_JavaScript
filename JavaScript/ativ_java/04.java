import java.util.Scanner;

public class ativ04 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Escreva seu nome: ");
        String nome = scan.nextLine();

        System.out.print("Quantas vezes quer seu nome escrito?: ");
        int vzs = scan.nextInt(); 

        int i = 1; 

        while (i <= vzs) {
            System.out.println( nome);
            i++;
        }
    }
}