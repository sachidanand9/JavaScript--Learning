let arr = [10,20,30,40,50]
for(let x of arr){
    console.log(x); // ------> it will print values of array

}

for (let x in arr){
    console.log(x); //-----> it will print index value of array
}


let obj ={
    fname:"Nik",
    id:2
}
for (let x in obj) {
    
     console.log(x); // ---> it's printing fname & id;
     console.log(obj[x]);  // ---> print values 

    //  console.log(obj.x); ----> we can't use obj.x in this ,bcz it start finding x in obj
        
    
}