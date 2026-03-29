import java.util.Scanner;

public class SwitchStatement {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number between 1-10: ");
        int n = sc.nextInt();

        // switch (n) {
        //     case 1:
        //         System.out.println("One");
        //     case 2:
        //         System.out.println("Two");
        //         break;
        //     case 3:
        //         System.out.println("Three");
        //         break;
        //     default:
        //         break;
        // }

        //Lambda Expression
        switch (n) {
            case 1,3,5,7,9 ->{             //Only Constant Value!
                System.out.println("The Number is Odd");
            }
            case 2,4,6,8,10->{
                System.out.println("The Number is Even");
            }
            default -> {
                System.out.println("Out Of Range");
            }
        }
    }
}
