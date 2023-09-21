import java.util.Scanner;

public class ativ08 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int result = 0;
        int i = 1;
        int maior = 0;

        while (i <= 20) {
            System.out.print("Escreva sua idade : ");
            String temp = scan.nextLine();

           
            int num = Integer.parseInt(temp);
            result += num;

            if (num>=18) {
             maior++;
                }
            
            i++;
        }

        
        System.out.print("Sao maiores de idade:  " + maior+ "pessoas");
    }
}