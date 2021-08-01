
Question --
You've to print first n fibonacci numbers.
Take as input "n", the count of fibonacci numbers to print.
Print first n fibonacci numbers.


In mathematics, the Fibonacci numbers, commonly denoted Fn, form a sequence, called the Fibonacci sequence, 
such that each number is the sum of the two preceding ones, starting from 0 and 1.Some terms are --

0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55 , 89 , 144 ,...

// Fibonacci numbers are named after Italian mathematician Leonardo of Pisa, later known as Fibonacci.

The base condition for the Fibonacci series is that it starts with 0 and 1, 
and then keeps on adding the preceding two terms to form the next term.

code --
import java.util.*;

public class Main {

  public static void main(String[] args) {
    // write your code here

    Scanner scn = new Scanner(System.in);
    int num = scn.nextInt();
    int a = 0 ;
    int b = 1;

    for (int i = 0 ; i < num; i++)
    {

      System.out.println(a);
      int c = a + b;
      a = b;
      b = c;
    }


  }
}