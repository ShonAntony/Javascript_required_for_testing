class Car {
    constructor(make,model){
        this.make = make;
        this.model = model;
    }

    startEngine(){
        console.log(`the car has started`);
    }

}


class BMW extends Car{
    startEngine(){
        console.log(`the ${this.model} car has started`);
    }
}


const baseCar = new Car("German","X1");
baseCar.startEngine();
const c1 = new BMW("German","X1");
c1.startEngine();

// here if i am using the object reference variable of BMW class then the "startengine()" in the car class will be overridden by the BMW class
