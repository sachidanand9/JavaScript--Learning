                            // Object creation and reading 
// let obj = {
//    ename: "Nazim",
//    age: 20,
//    gender:"Male",
//    degree:"btech",
//    branch:"cse",
//    marks:[90 , 50 , 100]

// };
                                     // read
// console.log(obj.ename);
// console.log(obj.gender);
// console.log(obj.marks[2]);

                                    // Update
// obj.marks[3]=80
// console.log(obj.marks);

                                   // Delete
// delete obj.age
// console.log(obj);      

// delete obj.marks[3]
// console.log(obj.marks);













       //            creating an object by using   Object litreals
//  literals
// let data = [
//     {
//         enmae: "Nazim",
//         sal: 400000,
//         company: "wipro",
//     },

//     {
//         enmae: "Ravi",
//         sal: 405000,
//         company: "HCL", 
//     },
//     {
//         enmae: "viky",
//         sal: 406980,
//         company: "TCS",
//         hobbies:{
//             outdoorGames:["Cricket","volleyball","football"]
//         }
//     },
// ];

// console.log(data[2].company);
// console.log(data[2].hobbies.outdoorGames[2]);




//                              creating an object by using   Object constructor 


// let obj1 = new Object()
// obj1.ename = "honey"
// obj1.age = 20
// obj1.company = "TCS"
// console.log(obj1);

// let obj2 = {
//     ename:"noor",
//     age:20
// }
// let key = "ename"
// console.log(obj2[key]);



let obj ={
    ename:"Raj",
    id:1
}

// Object.kays()

let objkeys = Object.keys(obj)
console.log(objkeys);    // ['ename', 'id']

// Object.values()
let objValues=Object.values(obj)
console.log(objValues); // ['Raj' , 1]

// Object.entries()
let objEntries = Object.entries(obj)
console.log(objEntries); // [Array(2), Array(2), Array(2a)]