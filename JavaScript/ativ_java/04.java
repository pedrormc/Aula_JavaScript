import java.util.Scanner;

public class HelloWorld {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Escreva seu nome: ");
        String nome = scan.nextLine();

        System.out.print("Quantas vezes quer seu nome escrito?: ");

        int vzs = Integer.parseInt(scan.nextLine()); 

        int count = 1; 

        while (count <= vzs) {
            System.out.print("\n" + nome);
            count++;
        }
    }
}