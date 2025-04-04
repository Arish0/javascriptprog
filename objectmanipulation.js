const cars = `{"Carname":"Bolero ZLX","Type":"SUV","Horsepower":"130 bhp", "Bharat stage": 6 }`;


const tostr = JSON.parse(cars);
console.log(tostr["Type"]);//accessing the object using bracket notation
console.log(tostr.Horsepower)// accesing the object using dot notation

const jsonobj = JSON.stringify(tostr);
console.log(jsonobj);


//Using parse 
const fruits = {"Fruit1": "Mang0","Fruit2": "Apple","Fruit3":"Papaya"}
console.log(Object.keys(fruits));
console.log(Object.values(fruits));
console.log(Object.entries(fruits));





