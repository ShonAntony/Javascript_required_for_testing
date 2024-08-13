// static concept 
// values which are common across the different classes can be made into a single static variable which can be used according to 
// the need of use 


class Car {
    constructor(name,brand,year){
        this.name = name;
        this.brand = brand;
        this.year = year;
    }

    static wheels = 4;

    static stop(){
        console.log('the car has stopped');
    }

    drive(){
        console.log(`${this.name} is driving`);
    }


}


const c1 = new Car("X1","BMW",2024);
console.log(c1.name+" "+c1.brand+" "+c1.year);
c1.drive(); // this is a non static method which can only be accessed by the non static variable 
Car.stop(); // this is a static method which can be used only with the help of class name 

// here we can't access the non static method using class name 
// here we can't access the static methods using the non static variables 

// if there is a static variable or function we need to call it using the class name 
// Ex: Car.stop(); // stop is a static method 

// if there s a non static variables ot functions we need to use the object reference variable to access the same 
