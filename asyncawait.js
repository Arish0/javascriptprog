//Without using asyc/await
function getData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve("Fetched Data")
        },5000);
    });
}
function callFunc(){
    const data =  getData();
    console.log("Call the data:",data);
}
callFunc()
console.log("All OK");

//Using Async/Await
function putData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve("Works fine")
        },5000);
    });
}
async function call12Func(){
    const data = await putData();
    console.log("Put the data:",data);
}
call12Func()
console.log("Setup Initialized.......");

