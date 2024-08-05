
// the below function is to check the age of the voter and this is an example for the if() else statements 
function checkAge(age){
    if(age>=18){
        console.log("it is the right age to vote");
    }
    else{
        console.log("you are not elegible to vote");
    }
}

checkAge(10);  // you are not elegible to vote
checkAge(18);  // it is the right age to vote

// if we need to check if the number is a positive number or a neg number we need to use more than one if conditions and the example for it is given below 

function checkNumb(number){
    if(number>0){
        console.log("The number is a positive number");
    }
    if(number<0){
        console.log("The number is a negative number");
    }
    if(number==0){
        console.log("the number is zero");
    }
   
}

checkNumb(10); // The number is a positive number
checkNumb(-10); // The number is a negative number
checkNumb(0); // The number is a negative number

//  if we need to assign the grades based on the markes which we have recieved we are going to use else-if


function checkGrade(score){
    let grade;
    if(score>=90){
//A   
        grade="A";
    }
    else if(score>=80 && score<90){
//B
        grade="B";
    }
    else if(score>=50 && score<80){
//C        
        grade="C";
    }
    else if(score>=40 && score<50){
//D   
        grade="D";
    }
    else{
//F
        grade="F";
    }
    console.log(grade);
}

checkGrade(50);
checkGrade(95);
checkGrade(80);
checkGrade(39);

// below we are going to use a nested if else
function testNum(num){
    if(num>=10){
        console.log("greater than or equal to 10");
    }
    else{
        if(num<10){
            console.log("lesser than 10");
        }
    }
}

testNum(10);


// switch case similar to how it works in java 

function checkDay(dayNumb){
    let day;
    switch (dayNumb) {
        case 1:
            day="Monday";            
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            break;
        case 7:
            day="Sunday";
            break;
        default:
            day="no day is selected";
        
    }
    console.log(day);  
    return day;  
}

console.log(checkDay(2));
