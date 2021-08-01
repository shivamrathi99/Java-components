
question -- 1. You've to print all prime numbers between a range. 
2. Take as input "low", the lower limit of range.
3. Take as input "high", the higher limit of range.
4. For the range print all the primes numbers between low and high (both included).

Constraints
2 <= low < high < 10 ^ 6
Sample Input
6 
24
Sample Output
7
11
13
17
19
23

Code -- 


import java.util.*;

public class Main {
  public static void main(String[] args) {
    // write your code here

    Scanner scn = new Scanner(System.in);
    int low = scn.nextInt();
    int high = scn.nextInt();


    for (int num = low; num <= high; num++)
    {

      int count = 0;
      for (int div = 2; div * div <= num; div++) {

        if (num % div == 0) {
          count++;
          break;
        }


      }

      if (count == 0) {
        System.out.println(num);
      }


    }








  }
}