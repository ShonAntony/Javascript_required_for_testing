// here we are going to discuss about inheritance 

// parent class (Super class)
class Vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo(){
        return `${this.make} , ${this.model} , ${this.year}`;    
    }

    startEngine(){
        console.log("========================================================================================");
        console.log("the engine has started !!!!!");
        console.log("========================================================================================");
    }

    stopEngine(){
        console.log("========================================================================================");
        console.log("the engine has Stopped !!!!!");
        console.log("========================================================================================");
    }
}

// child class (sub-class)
class Car extends Vehicle {
    constructor(make,model,year,fuelType){
        super(make,model,year); // this constructor will call the parent class constructor 
        this.fuelType = fuelType;
    }

    driveCar(){
        console.log("========================================================================================");
        console.log("driving the car : "+this.model+" with the fuel type being : "+this.fuelType);
        console.log("========================================================================================");
    }
}

class Truck extends Vehicle{
    constructor(make,model,year,loadingCapacity){
        super(make,model,year);
        this.loadingCapacity = loadingCapacity;
    }

    driveTruck(){
        console.log("========================================================================================");
        console.log("driving the truck :"+this.model+" and the capacity is "+this.loadingCapacity); 
        console.log("========================================================================================");
    }
}



// here i am going to create the objects to access these variables as well as methods using the "new" keyword 

const car = new Car("German","BMW M340i",2024,"Petrol");
console.log(`${car.make} made ${car.model} bulit in the year ${car.year} runs on ${car.fuelType}`);
console.log("========================================================================================");
const truck = new Truck("Indian","Ashok Layland",2005, "100 ton");
console.log(`${truck.make} made ${truck.model} bulit in the year ${truck.year} can carry upto ${truck.loadingCapacity}`);
console.log("========================================================================================");


console.log(car.getInfo()); // parent class method
car.startEngine();// parent class method 
car.driveCar();// same class method 
car.stopEngine(); // parent class method
console.log(truck.getInfo());// here we are going to get the info regarding the truck object 
