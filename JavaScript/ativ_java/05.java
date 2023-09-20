import java.util.Scanner;

public class HelloWorld {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int result = 0;
        int count = 1;

        while (count <= 10) {
            System.out.print("Escreva seu numero: ");
            String temp = scan.nextLine();

            // Converter a string em um inteiro e somar ao resultado
            int num = Integer.parseInt(temp);
            result += num;
            
            count++;
        }

        System.out.print("A soma dos numeros e:  " + result);
    }
}
