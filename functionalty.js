let section = document.getElementById("color")
console.log(section);

function abc(){
//   console.log("Button is Clicked");
// alert("Button is clicked")
section.style.backgroundColor="yellow"
}

function val() {
    console.log("Ket is pressed");
    
}

function up() {
    console.log("Key is released");
    
}

// function double() {
//     alert("Double Click")
//     // console.log("Two time clicked");
// }
// function mousein() {
//     console.log("mouse in");
    
// }

// function out() {
//     console.log("out");
// }

//---> Element.addeventlistener(event,callbackfun,use capture)

let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    console.log("first function");
})
btn.addEventListener("click",()=>{
    console.log("Second function");
})
