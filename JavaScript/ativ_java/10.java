import java.util.Scanner;

public class ativ10 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Escreva um numero para a tabuada: ");
        int numero = scanner.nextInt();

        System.out.println  ("Tabuada do " + numero + ":");

        int i = 1;
        
        while ( i <= 10) {
            int resultado = numero * i;
            System.out.println(numero + " x " + i + " = " + resultado);
        }

        scanner.close();
    }
}

