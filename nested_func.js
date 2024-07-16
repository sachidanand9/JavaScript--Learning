// function parent(){
//     var a = 10;
//     console.log(a);
//     function child(){
//         var b = 20
//         console.log(b);
//     }
//     child()
// }
// parent()



debugger;
function abc(){
    let a = 10;
    const z=100
    console.log(a,z);
    function xyz(){
        let b = 20;
        console.log(b,a);
    }

    return xyz;
}
let val = abc();
console.log(val);
val();