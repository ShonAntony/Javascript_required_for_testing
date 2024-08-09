// different ways of creation of an object 


// first way of creating an object 

const user ={
    name : "Shon",
    age : 25,
    country : "India",
    occupation : "Engineer"
};

console.log(user.name);
console.log(user.age);
console.log(user.country);
console.log(user.occupation); 
console.log("============================================================");



// This is the second why of creation of an object where we use the "this" keyword and creating the object of that method
// using the constructor way of creating an object 
function car(brand,model,price){
    this.brand = brand;
    this.model = model;
    this.price = price;
}

const c1=new car("BMW","M340i","78.5L");
console.log(c1.brand);
console.log(c1.model);
console.log(c1.price);
console.log("brand :"+c1.brand+" model :"+c1.model+" price :"+c1.price);
console.log("============================================================");

const c2 = new car("BMW","X1","1.2Cr");
console.log(c2.brand);
console.log(c2.model);
console.log(c2.price);
console.log("brand :"+c2.brand+" model :"+c2.model+" price :"+c2.price);
console.log("============================================================");

// creating an object using the class
class User{
    constructor(name,ID,age,email){
        this.name = name;
        this.ID= ID;
        this.age = age;
        this.email = email;
    }

    displayUser(){
        console.log(`the name of the customer is : ${this.name} ,
the ID is : ${this.ID}
the age is : ${this.age}
the email is : ${this.email}`);
    }
}

const user1= new User("Shon",1,25,"shon.a@fireflink.com");
user1.displayUser();
console.log("============================================================");
console.log(user1.name);
console.log(user1.ID);
console.log(user1.age);
console.log(user1.email);
console.log("============================================================");

// using "Object.create()" for this we need to provide the prototype 
const  employeePrototype  =  {
    printInfo : function(){
        console.log(`hello welcome : ${this.name}`);
    }
};

const e1 =Object.create(employeePrototype);
e1.name = "Shon";
e1.printInfo();
console.log("============================================================");


// using the factory function for object creation 
function createDepartment(deptName,hod){
    return {
        name : deptName,
        hod : hod,
        printInfo : function() {
            console.log(`the dept name is "${this.name}" and the HOD is "${this.hod}"`);
        }
    }
};

const objectValues1=createDepartment("MECH","Shon");
const objectValues2=createDepartment("CS","Test");


objectValues1.printInfo();
console.log("============================================================");
objectValues2.printInfo();
console.log("============================================================");
console.log(objectValues1.name+" : "+objectValues1.hod);
console.log("============================================================");



