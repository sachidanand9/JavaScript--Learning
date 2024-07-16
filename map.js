/*     map(()=>{})   -----> Hof
let arr = [10,20,30,40,50]

arr.map((a,b,c)=>{
    console.log(a,b,c);
})

let val = arr.map((a,b,c)=>{
    console.log(a,b,c);
    return "hello"
})
console.log(val);*/


// filter(()=>{}) ----> it is used to filter an array 

let arr2=[1,2,3,4,5,6,7,8,9]
let filteredval = arr2.filter((a)=>{
    return a>5
})
console.log(filteredval);

let val = arr2.map((x)=>{
    return x>5
})
console.log(val);

