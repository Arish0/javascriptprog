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
    .then((ans) => {
        console.log(ans);

    })
    .catch((error) => {
        console.log(error);

    })
    .finally(() => {
        console.log("Finally");

    })


