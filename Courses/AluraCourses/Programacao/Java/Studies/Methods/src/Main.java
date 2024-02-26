public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        // Call myMethod from MyClass
        MyClass.myMethod();
        MyClass.myMethod();
        MyClass.myMethod();

        // Java Method Parameters
        MyClassWithParameter.myMethodParameter("Larissa");
        // Java Method with Multiple Parameters
        MyClassWithParameter.myMethodMultiParameter("Joao", 2);
        // Java Method with Return Values
        System.out.println(MyClassWithParameter.myMethodReturnValues(4)); // Outputs 8 (5 + 4)
        // Method Overloading
        System.out.println(MyClassWithParameter.myMethodReturnValues(2.5f));  // Similar with ^ but with float
        
    }
}
