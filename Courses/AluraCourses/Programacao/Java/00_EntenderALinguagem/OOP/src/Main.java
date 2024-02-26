public class Main { // Java is an object-oriented programming language.
    String fname = "John";
    String lname = "Doe";
    int age = 24;

    static void myMethod(){
        System.out.println("Hello World!");
    }

    // Create an Object
    public static void main(String[] args) {
        Main myObjct = new Main();
        System.out.println(myObjct.age);

        // Modify Attributes
        myObjct.age = 40; // age value is 40 now
        System.out.println(myObjct.age);
        System.out.println("Name: " + myObjct.fname + " "  + myObjct.lname);

        myMethod();
    }
}