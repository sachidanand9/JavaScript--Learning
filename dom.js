// DOM selectors 
// 1. --> document.getElementById()

let heading = document.getElementById("head")
console.log(heading);

//2. --> document.getElementByClassName

let section = document.getElementsByClassName("container")
console.log(section);
console.log(section[2]); // ---> used to target specific index element 


// let val = Array.isArray(section) //---> to check array is pure or not 
// console.log(val);

// let pureArray = Array.from(section) // ---> to convert into pure array
// console.log(pureArray);
// console.log(Array.isArray(pureArray));

// pureArray.map((ele)=>{
//    console.log(ele);
// })


// 3. --> document.getElementByTagName

let element = document.getElementsByTagName("p")
// console.log(p);
console.log((element[0].innerText));

// 4.--> document.querySelector()  --(it target only single element)

let classname = document.querySelector(".container")
console.log(classname);

let id = document.querySelector("#head")
console.log(id);

let tag = document.querySelector("p")
console.log(tag);

// 5. --> document.querySelectorAll() -- it is used to target 2 or more elemnts

let container=document.querySelectorAll(".container")
console.log(container);
console.log(Array.isArray(container));

container.forEach((ele)=>{
    console.log(ele);
})
