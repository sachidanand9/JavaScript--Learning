// Event propagation 

let section = document.querySelector("section")
let article = document.querySelector("article")
let div = document.querySelector("div")
let span = document.querySelector("span")

section.addEventListener("click",()=>{
    console.log("section");
    section.style.backgroundColor="Yellow"
},0)            // ---> by adding 1 it act as Capturing phase and without 1 its Bubbling phase
article.addEventListener("click",()=>{
    console.log("article");
    article.style.backgroundColor="blue"
},0)
div.addEventListener("click",()=>{
    console.log("div");
    div.style.backgroundColor="green"
},0)
span.addEventListener("click",(e)=>{
    e.stopPropagation()  //--> It will block either capturing phase or bubbling phase
    e.stopImmediatePropagation() // --> it will block other event listner to execute
    console.log("span",e);  // e--> it is just a parameter you can take any parameter value , can't use numerical value
    span.style.backgroundColor="pink"
},0)
span.addEventListener("click",()=>{
    console.log("Hello");
})

