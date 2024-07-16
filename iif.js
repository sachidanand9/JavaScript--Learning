// immediately ivoked function
// debugger;
// (function(){
//      console.log("IIFE");
// })();

// (function(){
//     console.log("IIFE");
// })();

let fun =(function(){
    console.log("Parent");
    function abc(){
        console.log("child");
    }
    return abc
})();

console.log(fun);
fun();
let second = (function(){
    console.log("1st life");
    return(function(){
        console.log("2nd iife");
    });
})();
console.log(second);
second()