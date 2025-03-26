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