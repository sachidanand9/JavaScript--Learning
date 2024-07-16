let p1 = new Promise((resolve , reject)=>{
    if(10>2){
        resolve("She said yes")
    }
    else{
        reject("NOOO")
    }
})
console.log(p1);

p1.then(()=>{
    console.log("Hello");
})

p1.catch(()=>{
    console.log();
})

p1.finally(()=>{            // finally block will executed in both condition
    console.log("DONE✔️");
})