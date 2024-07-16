function getEmail() {
    // console.log(this);
    console.log(`${this.firstname}${this.lastname}@gmail.com`);
    return (this.email = `${this.firstname}${this.lastname}@gmail.com`)
}
function chooseSubject(sub1,sub2) {
    console.log(sub1,sub2);
}
let student = {
    firstname: "Rahul",
    lastname: "singla",
};
let teacher ={
    firstname: "mandeep",
    lastname:"gill",
};
//---------> call()  apply() and bind() <---------------
getEmail.call(student)
chooseSubject.call(student,"HTMl","CSS")
// console.log(student);

// ----> use apply() <----(apply act same as  call())
getEmail.apply(student)
chooseSubject.apply(student,["jS","React"])

// -----> bind() <----- (binding a function to object for later use)
let laterUseStudentEmail = getEmail.bind(student)
// console.log(laterUseStudentEmail) 
laterUseStudentEmail()
let laterUseChooseSubject = chooseSubject.bind(student,"web","tech")
laterUseChooseSubject()

getEmail.call(student)
console.log(student);
getEmail.call(teacher)
console.log(teacher);
