const cars = `{"Carname":"Bolero ZLX","Type":"SUV","Horsepower":"130 bhp", "Bharat stage": 6 }`;


const tostr = JSON.parse(cars);
console.log(tostr.Type);
const jsonobj = JSON.stringify(tostr);
console.log(jsonobj);





