import java.util.Scanner;

public class ativ05 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int result = 0;
        int i = 1;

        while (i <= 10) {
            System.out.print("Escreva seu numero: ");
            int temp = scan.nextInt();

            
            
            result += temp;
            
            i++;
        }

        System.out.print("A soma dos numeros e:  " + result);
    }
}
