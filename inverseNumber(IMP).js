question -- 
1. You are given a number following certain constraints.
2. The key constraint is if the number is 5 digits long, it'll contain all the digits from
 1 to 5 without missing any and without repeating any. and the digit and its position be replaced for 
 making inverse. eg. if the number is 3 digits,so it will contain digits (1,2,3 only), without repeating and 
 missing any, lets take the number as 312 (starting from right, 1st position value is 2, 2nd pos value
    is 1 and so on), replace the value and position, so the inverse will be 213. 
    
3. Take as input number "n", assume that the number will follow constraints.
4. Print it's inverse.

Constraints

1 <= n < 10^8, and follwing other constraints defined above.

Sample Input

28346751

Sample Output

73425681

code -- 

package com.shivam;

import java.util.*;

public class Helloworld {

    public static void main(String[] args) {


//        steps are --
//                1. create answer variable to store the result
//                2. start the position from 1 as counting is starting from one
//                3. take out the last digit of the number and replace it with the loop value
//                    so that the position and value is exchanged
//                4. decrease the number by one digit and repeat
//                5. print the answer


        Scanner scn = new Scanner(System.in);
        int num = scn.nextInt();

        int answer = 0;
        //start the loop, i being the position of the digit in number
        for (int i = 1; num > 0; i++) {
            //take out the last digit from the number
            int temp = num;
            temp = temp % 10;
            // making the inverse number by changing value and position
            answer = answer + i * (int) Math.pow(10, temp - 1);
            //decreasing the number by one digit
            num = num / 10;
        }
        System.out.println(answer);

    }

}
