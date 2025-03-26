//Simple if statement
let Age = 70

if(Age <= 10){
    console.log("You are an kid");
}
else if(Age <=18){
    console.log("You are an teenager");
}
else if (Age >= 18 && Age <= 50){
    console.log("You are an Adult");
}
else{
    console.log("You are an super senior");
}

//finding leap year
let year=2026

if(year%4==0){
    console.log("This year is a leap year")
}
else{
    console.log("This year is not a leap year")
}

//nested if statement
let age = 35
let attempts = 2

if(age >=21 && age <= 35){
    console.log("You are eligible for UPSE");

    if(attempts == 1){
        console.log("you have two attepts more to clear the exam");
    }
    else if(attempts == 2){
        console.log("you have one attempt more to clear the exam");
    }
    else if(attempts == 3){
        console.log("Come on! This was your final attempt")
    }
    else{
        console.log("You have no more attempts");
    }

}
else{
    console.log("You are not eligible for UPSE");
}



