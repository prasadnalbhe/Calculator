// debugger
let button=document.querySelectorAll(".str");

let del=document.querySelector(".de")
let inp=document.querySelector("input");
let eq=document.querySelector(".equal");
console.dir(button);


let ac=document.querySelector(".ac");
ac.addEventListener("click",()=>{
    console.log("ac is clicked")
    inp.value="";
    console.log(inp.value);

})
del.addEventListener("click",()=>{
    inp.value=inp.value.toString().slice(0,-1);
})

button.forEach((btn)=>{
    // console.log(btn.innerText);
    btn.addEventListener("click",()=>{
        inp.value+=btn.value
        console.log("clicked")
        console.log(btn.innerText);
        console.log(inp.innerText)
    })
})

eq.addEventListener("click",()=>{
    try{

        inp.value=eval(inp.value);
    }
    catch{
        inp.value="Invalid Expression";
    }
    console.log(inp.value)
})