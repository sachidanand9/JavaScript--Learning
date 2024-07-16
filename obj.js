let person=
{
    fname:"nik",
    lname:"sode",
    println:function abc(){
        console.log(this);
        console.log(`${this.fname})${this.lname}`);
    }
    

}
console.log(person);
person.println()