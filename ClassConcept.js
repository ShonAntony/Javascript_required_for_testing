class car {
    // here in any class there can be only constructors and constructor overloading is not allowed
    constructor(name,price,model,color){
        this.name = name;
        this.price = price;
        this.model = model;
        this.color = color;
    }

    refuel(){
        console.log(this.name+" "+this.model+" "+"has been refueled !!!!!!");
    }
}


// using the new keyword we can create n number of objects which can have different values which are assigned to it 

let c1 = new car("BMW","80L","X1","gery");
console.log("=================================================");
console.log(c1.name);
console.log(c1.price);
console.log(c1.model);
console.log(c1.color);
c1.refuel();
console.log("=================================================");

let c2 = new car("BMW","75L","M340i","black");
console.log("=================================================");
console.log(c2.name);
console.log(c2.price);
console.log(c2.model);
console.log(c2.color);
c2.refuel();
console.log("=================================================");