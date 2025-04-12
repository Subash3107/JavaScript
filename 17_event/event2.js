// ! event handler
let add=()=>{
    let a = 10;
    let b = 20;
    // alert(a+b);
    console.log(a+b);
    
}
let display =()=>{
    console.log('hello');
    
}

// ! event listener

let btn = document.getElementById("btn")
console.log(btn);

// we can use single id for multiple events
btn.addEventListener("click",()=>{
    console.log('i am add event listner');
})

btn.addEventListener("click",(e)=>{ // e --> event object
    console.log(e);
    console.log(e.target);// it give the html tag as the outpu
    
    console.log('second time click event');
    
})


let f = document.getElementById("form")
f.addEventListener("submit",(e)=>{
    e.preventDefault() // used to stop reload


let input1 = parseInt(document.getElementById("input1").value)
let input2 = parseInt(document.getElementById("input2").value)
let sum =input1+input2;

let output = document.querySelector("#output")
output.innerHTML=`<h1>the output is ${sum}<h1>`
})
