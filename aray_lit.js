// 1) Array literal 

// let arr = [ 10, "hello",true,undefined,null]
//      //     0     1      2       3       4

//      console.log(arr);
//     //  console.log(arr[4]);

//     for (let i =0; i<length;i++){
//         console.log(arr[i]);
//     }


// 20-03-24

let arr = [10,20,39,40]
arr.push(100) // -----> add element at the last
console.log(arr);

arr.pop()     //----> remove element from the last
console.log(arr);

arr.unshift(420) //----> add elemnt at the 0 index
console.log(arr);

arr.shift()  // -----> remove element from the 0th index
console.log(arr);   

let newArr=[100,200,300,400,500]
// -----> todo = arr.Splice ( start index , no.of ele want to remove, ele want to add )
// newArr.splice(1,2,900)
// console.log(newArr);

//newArr.splice(1,2)
// console.log(newArr);

newArr.splice(2,0,90)
console.log(newArr);