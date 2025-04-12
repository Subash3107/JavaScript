let hello =()=>{
    alert("hello")
}
// hello
let add=()=>{
    let a=10;
    let b=20;
    let sum=a+b;
    document.writeln(sum);
}
let mouseOver=()=>{
    console.log(" mouse is over");
}

// event handling --> writing js in same line with html
// event listener --> writing js and html in same file(i.e in js file)

let bt = document.getElementById("button");
bt.addEventListener("click",()=>{
    console.log("hi how are you");
})