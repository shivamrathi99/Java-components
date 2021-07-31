In Java the classes (containers for related methods) name are according to pascal 
naming (every word capitalize) and methods (functions inside classes) are named according to camel case.

each class and method will have access specifiers -- public, private & protected and return type -- void. int etc

commmand line application is when we run app in command line, it doesnt have any gui.

package is used to group related classes that belong to the same category or provide the similar functionality
 and useful for organizing large application with hundreds of classes.

the class has the same name as the file as per java standards.

for starting-- 
open a new project --> select project sdk --> select command line app --> right click on src --> select new class
--> create the class name simply (eg. Helloworld), or make it in a particular package (com.shivam.Helloworld) ->
this will create a file with package of com.shivam and the class will be "public class Helloworld".

//use cmd+j to see all live templates that are valid for the current context. press esc will close the dropdown
// without making changes. 




simple template-- 

package com.shivam;  //package name 

public class Helloworld  { //class name 
   public static void main(String[] args){ 
       System.out.println("Hello world!"); 
       // 'System.out.print' command prints to the console while 'System.out.println'
        // prints and then moves to next line as well.
   }
}

output -- Hello world!


code execution steps -- 
compilation --> execution 

in compilation, 
java compiler(in the JDK) changes the source code (.java file) to byte code (.class file) which is platform 
independent 

in execution,
java files are compiled into bytecode to run making it platform/machine independent to run on any machine with java runtime 
environment or simply java installed which contains the java virtual machine(JVM) to now convert the byte 
code to the native code of the machine according to the OS. More eg. Python, C#.


//use alt+4 to open/close the output terminal/

// use shift twice for search everywhere shortcut and ctrl twice for run anything shortcut 


The Scanner class is used to get user input, and it is found in the java.util package.
To use the Scanner class, create an object of the class and use the method for inputting the data type you want.

//methods to be used for taking various input data types

Method 	            Inputs
nextInt() 	        Integer
nextFloat() 	    Float
nextDouble() 	    Double
nextLong() 	        Long
nextShort() 	    Short
next() 	            Single-word
nextLine() 	        Line of Strings
nextBoolean() 	    Boolean

for eg.

package com.shivam;
import java.util.Scanner;
public class Helloworld  {
   public static void main(String[] args){
       // creating a scanner variable 
       Scanner Variable = new Scanner(System.in); //variable means you can name anything
       
       //using variable to input int type data 
        int n = Variable.nextInt();
        for(int i = 0 ; i<=n; i++)
        {
            System.out.println(i);
        }
      //using variable to input string type data 
        String name = Variable.nextLine();
        System.out.println("Hello " + name + ".");
   }
}


//If you enter wrong input (e.g. text in a numerical input), you will get 
// an exception/error message (like "InputMismatchException")


if you want to input both number and string, there is a trick to it 
//convert the int input to string and then parse it as integer.

package com.shivam;
import java.util.Scanner;
public class Helloworld  {
    public static void main(String[] args){
        Scanner Variable = new Scanner(System.in); 

        int n = Integer.parseInt(Variable.nextLine());
        String name = Variable.nextLine();
        System.out.println("Hello " + name + ". Here is your counting.");
        for(int i = 0 ; i<=n; i++)
        {
            System.out.println(i);
        }

    }
}


output --  
Hello Shivam. Here is your counting.
0
1
2
3
4
5

Process finished with exit code 0



// for any coding language, just know about these 5 things, to start coding in it - 

// 1. input
// 2. output
// 3. variables
// 4. conditions
// 5. loops
