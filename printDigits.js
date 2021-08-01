Question -- 
1. You've to display the digits of a number.
2. Take as input "n", the number for which digits have to be displayed.
3. Print the digits of the number line-wise.

Constraints

1 <= n < 10^9

Sample Input

65784383

Sample Output

6
5
7
8
4
3
8

code -- 
package com.shivam;

import java.util.*;

public class Helloworld {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int num = scn.nextInt();


        //count the number of digits 
        int count = 0;
        int temp = num;
        while (temp > 0) {
            temp /= 10;
            count++;
        }

        //setting the divisor such that only leftmost digit is left to print 
        int div = (int) Math.pow(10, count - 1);

        //reassigning number excluding the leftmost digit 
        while (div > 0) {
            int number = num / div;
            System.out.println(number);

            num = num % div;
            div = div / 10;
        }
//we have put div and not num in the while condition because if we put num as 1000 it will only count
//   it as 1 because then the condition will be fulfilled (num > 0); but for detecting 0s too in the number
//   we will check the while condition till the divisor digits become zero, so that whole number is scanned.

    }
}