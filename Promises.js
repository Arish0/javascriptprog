const ari = new Promise((resolve,reject) => {
    setTimeout(() =>{
        let ans = "Harish"
        if(ans){
            resolve(ans);
        }
        else{
            reject("No Data")
        }
    });5000
});
ari
    .then((name) => {
        console.log(name);

    })
    .catch((error) => {
        console.log(error);

    })
    .finally(() => {
        console.log("Finally");

    })


