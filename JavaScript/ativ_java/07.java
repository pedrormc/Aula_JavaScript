import java.util.Scanner;

public class ativ07 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int result = 0;
        int i = 1;

        while (i <= 10) {
            System.out.print("Escreva sua idade : ");
            String temp = scan.nextLine();

            
            int num = Integer.parseInt(temp);
            result += num;
            
            i++;
        }

        int med = (result/10);
        System.out.print("A media das idades e:  " + med);
    }
}