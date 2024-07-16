let h1 = document.getElementById("head")
let p1 = fetch("https://fakestoreapi.com/products")
console.log(p1);
p1.then((response)=>{
    // console.log(response.json());
    let p2 = response.json();
    console.log(p2);
    p2.then((data)=>{
        console.log(data); // array of object
        displayData(data) // sending array of objects as an argument 
    });
    p2.catch(()=>{
        console.log("error in fetching Array");
    })
});
p1.catch(()=>{
    console.log("error in fetching ressponse object");
})

// --> below function is accepting array of object and storing in (x) parameter
function displayData(x) {
    console.log(x);
    x.map((ele)=>{
        // console.log(ele);
        let{title,description,image}=ele // -->  destructuring an object

        let h1=document.createElement("h1")
        let p=document.createElement("p")
        let img=document.createElement("img")
        

        h1.innerText = title
        p.innerText = description
        console.log(img);
        img.setAttribute("src",image)
        
        
        // console.log(p);
        // document.body.appendChild(h1)   ----> appendChild is used to ad element to u1 ( only use h1 tag )
        document.body.append(h1,p,img)   // ---> in this use two or more tag 

        // // document.writeln(title)
    })  
}


