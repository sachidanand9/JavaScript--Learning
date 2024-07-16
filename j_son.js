//------------------ JSON (JAVASCRIPT OBJECT NOTATION ) ----------------------------//
// let obj = {
//     ename: "Honey",
//     id: 45,
//     comapnay: "TYSS",
// }
// console.log(obj);

// let val = JSON.stringify(obj) // ---> Convert jS-object to json 
// console.log(val); // Change type of obj into string 

// let newObj = JSON.parse(val)  // ---> Convert Json to jS-object
// console.log(newObj); // Change string to obj 


// ----- Time Delay ------
let btn = document.querySelector("button")
setTimeout(()=>{
    console.log("Start");
},5000); //--> time taken in millisecond 
let a = 30
console.log(b); 

var b = 40
console.log(a);

let x = setInterval(()=>{ //------> It is used to perform task after a particular time 
    console.log("HII");
},2000);


btn.addEventListener("click",()=>{
    clearInterval(x) //---> it is used to stop the iteration 
})