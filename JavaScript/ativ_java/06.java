import java.util.Scanner;

public class ativ06 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int result = 0;
        int i = 1;

        while (i <= 20) {
            System.out.print("Escreva sua idade numero: ");
            String temp = scan.nextLine();

         
            int num = Integer.parseInt(temp);
            result += num;
            
            i++;
        }

        System.out.print("A soma das idades e:  " + result);
    }
}