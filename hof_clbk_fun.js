debugger;
function sum(n1,n2) {
    console.log(n1+n2);

}

function HOF(a,b,callback) {
    console.log(a,b);
    console.log(callback);
    callback(a,b)
    
}

HOF (100,200,sum)