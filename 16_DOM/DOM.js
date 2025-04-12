// ! 1. how to access the elements
// ! target element by id
let p = document.getElementById("p1")
console.log(p);
let h = document.getElementById("h1")
console.log(h);

// ! target element by class 
// it will return an array or html collection to access the element use index
let container1 = document.getElementsByClassName("container")
console.log(container1);
console.log(container1[0]);

// ! target element by selector
// it will return node list and it will take only first element
let para = document.querySelector('#p1')
console.log(para);

let container = document.querySelector('.container')
console.log(container);

// ! 2. how to know what is present inside any element
let con3 = document.querySelector('.container3')
console.log(con3);
console.log(con3.innerHTML);
console.log(con3.innerText);
let textInsidecon3 = con3.innerText
console.log(textInsidecon3);

let ul= document.querySelector('.container4')
console.log(ul);
console.log(ul.innerHTML)
console.log(ul.innerText);

// .innerText
ul.innerText="hello world"
console.log(ul.innerHTML)
console.log(ul.innerText);

ul.innerHTML= "<h1>hi</h1>"
console.log(ul.innerHTML)
console.log(ul.innerText);

let cont5=document.querySelector('.container5')
cont5.innerHTML=ul.innerHTML
console.log(cont5.innerHTML)
console.log(cont5.innerText);

// ! 3. how to apply css from js
cont5.style.backgroundColor="green"
cont5.style.color="red"

// ! 4. how to add and remove class

let con6 = document.querySelector(".container6")
console.log(con6.classList)
con6.classList.add("hello")
console.log(con6.classList);
con6.classList.remove("hello")
console.log(con6.classList);
con6.classList.remove("dark")
console.log(con6.classList);


// instead of doing css in java script we can add class in js and use it inside html head
con6.style.backgroundColor="red"
con6.style.color="white"

con6.classList.add("olla")

// ! 5. how to create element in js
let heading1 = document.createElement("h1") // create h1 element
heading1.innerText="hello world"  // add text to h1 element
heading1.classList.add("heading1")  // add class to h1 element
let container6 = document.querySelector('.container6') // select container7
// container6.after(heading1) // add h1 element to container6
// container6.before(heading1) // add h1 element to container6
// container6.append(heading1) // add h1 element to container6
container6.prepend(heading1) // add h1 element to container6

let div1 = document.createElement("div") // create div element
div1.classList.add("div1") // add class to div element
container6.after(div1)
div1.innerHTML="<h1>hillo</h1>"// this line will not work because div1 is not in dom yet
div1.innerHTML="<ul><li>tea</li><li>coffee</li><li>biscuts</li></ul>" 

