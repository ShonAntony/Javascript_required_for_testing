// here we are going to use map() , filter() and reduce() on the array 

//=================================== MAP() ===============================================================================
// here the map() is going to return a new array with the necessary changes that needs to be done 

let arr1 = [1,2,3,4,5,6];
// here it acts like a forEach() where it takes the elements in the array and then perform the operations on the same 
let arrTimesTwo=arr1.map((e) => e*2);
console.log(arrTimesTwo);

// using this function for a real time example 
let far = [100,101,102,103,104,105,106];
// below i am using the map() to convert the above array into cel value
let cal=far.map((e) => (e-32)*(5/9));
// now i am going to print the "cal" array 
console.log(cal);


// here we can do the same thing in a different way that is creating a function and calling that function in the map()
function convert(fah){
    return (fah-32)*(5/9);
}
// here we are just going to pass the function as an argument here and each value from the list will undergo some operations inside the 
// function and it will return each value and that value is stored in a new array 

let cal2 = far.map(convert);
console.log("============");
console.log(cal2);