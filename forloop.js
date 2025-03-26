//for loop
let n=27

for(let i=0;i<n;i++){
   
   let str=""
   for(let j=0;j<i;j++){
   
    str+=String.fromCharCode(65+j);
    
   }
    
    console.log(str);
}


let alpha=["a","b","c","d","e"]

for(let i=0;i<=alpha.length;i++){
    console.log(alpha.slice(0,i).join(","));
}

//while loop
let persons = 1;

while(persons <=5){
    console.log("persons can seat in a car = member",persons);
    persons++;
}

//do while loop
let number = 1
do{
    console.log("Sequence number is",number)
    number++;
}while(number <=5){
    console.log("Your assigned car number is NO",number);
    
}


// for in loop
let person = { name: "John", age: 25, city: "New York" };

for (let i in person) {
    console.log(i + ":", person[i]);
}

//for of loop
let cars =["Bolero ZLX","XUV 300","swift VDI","Volvo XC 90"]

for(car of cars){
    console.log("My favourite vehicles are",car);
}
