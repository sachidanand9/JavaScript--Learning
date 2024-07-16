let elements = document.querySelectorAll("div");
console.log(elements);

elements.forEach((x)=>{
    x.addEventListener("mouseover",()=>{
        let val = x.innerText;
        x.style.backgroundColor = val;
    });

    x.addEventListener("mouseout",()=>{
        x.style.backgroundColor="White";
    });
});