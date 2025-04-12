let container1=document.querySelector(".container1")
let container2=document.querySelector(".container2")
// container2=container1.innerText

let copy = document.getElementById("a")
copy.addEventListener("click",()=>{
    container2.innerHTML=container1.innerHTML
})