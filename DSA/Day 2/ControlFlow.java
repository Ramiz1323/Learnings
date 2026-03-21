import java.util.Scanner;

public class ControlFlow {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try{
            System.out.print("Enter a: ");
            int a = sc.nextInt();
            System.out.print("Enter b: ");
            int b = sc.nextInt();

            if(a > b){
                System.out.println("a is greater than b");
            }else if(a < b){
                System.out.println("a is less than b");
            }else{
                System.out.println("a is equal to b");
            }
        }finally{
                sc.close(); 
                //scanner should be closed to prevent resource leaks
                //Otherwise, no need to use try-finally block
        }
        }
}
