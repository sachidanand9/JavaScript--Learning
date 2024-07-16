--function a() {
    let x = "Parent"
    console.log(x);

    function b(){
        let y = "Chlid"
        console.log(y,x);
        return y
    }
    return b
}

let val = a()
console.log(val);
let y = val()
console.log(y);