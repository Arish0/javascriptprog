
function GoingToOoty(rain,callback){
    if(rain == 1){
        console.log("Cancel the trip")
    }
    else{
        console.log("Going to Ooty");
    }
    callback();
   
}
function personname(){
    console.log("Harish");
}
GoingToOoty("2",personname);


//callbacks passing in parameter's

function Vehicle(lorryNumber,BodyType,Wheels,BodyBuilding,callback){
    let lorry = []
    lorry.push(lorryNumber,BodyType,Wheels,BodyBuilding)
    console.log("Lorrydashboard:",lorry);
    callback(lorry);
 }
 

 function vehicleNumber(){
 console.log("Heavy Vehicle");
    
}
Vehicle("TN 43 K 1499","Delux multi axle","12 wheels","REC BodyWorks",vehicleNumber);




