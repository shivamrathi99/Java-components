Checking a number for being prime or not is called a Primality Test. 
A prime number is one that is only divisible by itself and 1.

1 is neither prime nor composite, but for the sake of this program, we will print "prime" for the input value of 1.

A prime number has only two factors: itself and 1.



Question -- 
1. You've to check whether a given number is prime or not.
2. Take a number "t" as input representing count of input numbers to be tested.
3. Take a number "n" as input "t" number of times.
4. For each input value of n, print "prime" if the number is prime and "not prime" otherwise.

constraints -- 
1 <= t <= 10000
2 <= n < 10^9

Sample Input
5
13
2
3
4
5

Sample Output
prime
prime
prime
not prime
prime





Code -- 

import java.util.*;

public class Main {

  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);

    int t = scn.nextInt();
    for (int i = 0; i < t; i++) {
      int n = scn.nextInt();
      int count = 0;
      for (int div = 1; div <= n; div++) {
        if (n % div == 0) {
          count++;
        }
      }
      if (count == 2) {
        System.out.println("prime");
      } else {
        System.out.println("notprime");
      }
    }

  }
}


Problem with the code -- 
Our code returns a Time Limit Exceeded(TLE) error because it takes too much time to compute

The given constraints on the variables t and n are 
too large for the computational power to compute within 1 second.

The processor has the computational power to compute about 10^9 operations within 1 second,
This is due to the fact that it runs 3*10^9 clockcycles/sec. or 3GHz power.

so we modify our code a little --

we check the division starting from 2 to root 'n', if passed(means count ==0), print prime
also we dont have to check division for all divisors, if only one div is detected between 2 to root 'n',
then we can deduce the number not prime. so we introduce break, it will break the loop if count is set to 1;
otherwise it will keep checking until end of loop
at last we check if count = 0, then prime.


code--
import java.util.*;

public class Main {

  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);

    int t = scn.nextInt();
    for (int i = 0; i < t; i++) {
      int n = scn.nextInt();
      int count = 0;
      for (int div = 2; div*div <= n; div++) {
        if (n % div == 0) {
          count++;
          break;
        }
      }
      if (count == 0) {
        System.out.println("prime");
      } else {
        System.out.println("notprime");
      }
    }

  }
}

this code will run much faster and within our computational power.
