public class Ativ02 {
    public static void main(String[] args) {
    
    int i = 1;
    int temp = 0;
    
    
    while( i <= 15){
        
       int result = i + temp;
        
        
        System.out.println("A soma de: "+ (i) +" + "+ (temp) +" = "+ (result));
        
        i++;
        temp = result;
    }


    }
}