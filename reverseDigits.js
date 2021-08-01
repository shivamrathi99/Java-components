Question -- 
1. You've to display the digits of a number in reverse.
2. Take as input "n", the number for which digits have to be display in reverse.
3. Print the digits of the number line-wise, but in reverse order.


Constraints

1 <= n < 10^9

Sample Input

65784383

Sample Output

3
8
3
4
8
7
5


code-- import java.util.*;

public class Main {

  public static void main(String[] args) {
    // write your code here
    Scanner scn = new Scanner(System.in);
    int num = scn.nextInt();

    while (num > 0)
    {
      int dig = num % 10;
      num = num / 10;
      System.out.println(dig);
    }
  }
}
