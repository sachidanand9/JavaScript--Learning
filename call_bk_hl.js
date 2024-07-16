                     // <------------------------- Call Back Hell ------------------->

// The call back hell in jS is referd to as a situation where an excessive amount of nesterd call back functions are being esxecuted it reduces code readbility and maintaence  the callback hell situation typically occures when dealing with asynchronus request operation such as making multiple API requests or handlig events with complex dependency. 

function task1(callback){
    setTimeout(()=>{
        console.log("Task1 is completed");
        callback();
    }),1000;
}
function task2(callback){
    setTimeout(()=>{
        console.log("Task2 is completed");
        callback();
    }),4000;
}
function task3(callback){
    setTimeout(()=>{
        console.log("Task3 is completed");
        callback();
    }),3000;
}
function task4(callback){
    setTimeout(()=>{
        console.log("Task4 is completed");
        callback();
    }),2000;
}

// -----> pyramid of doom <--------

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All task are complete");
            })
        })
    })
})