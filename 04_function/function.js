// ! how to declare function
// syntax
// function function_name(){

// }
// function_name()

// ! 1. Name function
// funtion without parameter
function display() {
  console.log("hello, I am display function...");
}
display();

// ! function with parameter

function number(a, b) {
  console.log(a + b);
}
number(30, 50);

// function value with return value

function number2(a, b, c) {
  let sum = a + b + c;
  return sum;
}
let res = number2(20, 30, 40);
console.log(res);

// ! 2. function with expression

//it is a anonymous function we can't call without any variable
// so we are declaring it with let variable 
// function(){
//    console.log("javaScript");
// }
let hello = function(){
    console.log("javaScript");
}
hello()
// here hello() is function call not a variable cal bcuz we are using ()

// ! 3. arrow function

// let multiply = function () => {  } // we cannot use function it is a syntax error
let multiply = () => {
    console.log("i am multiply function");
}
multiply()

// ! 4. Nested function

function outer(){
  let a = 10;
  function inner(){
    let b = 20;
    console.log(a+b);
  }
  inner();
}
outer();// we can't call inner out of the function


// ? LEXICAL SCOPPING
// when we are declaring nested function, inner function can take all the property of outer function but the outer function can't take the property of inner function. This is called lexical  scopping.



// ! Higher Order function and Callback function

// the function which takes another function as an argument or parameter is called higher  order function.

// the function which we are sending as parameter is called callback function.

// hi--> callback function
let hi = () =>{
  console.log("I'M HI FUNCTION");
}
// Hello--> higher order function
let Hello = (a,b,c)=>{
  console.log(a); //10
  console.log(b);
  c(); //
}
Hello(10,"abc",hi)  // hi is not a string it is function

let car = ()=>{
  console.log("hello world");
}
let bike = (a,b,c) =>{
  console.log(a);
  console.log(b);
  c()
}
bike(20,30,car)
bike(1,2,()=>{console.log("india")}) // ()=>{} this anonymous function used commonly
bike(11,22,function (){
  console.log("world");
});


// IMMEDIATE INVOKE FUNCTION EXPRESS (IIFE)
// (anonymous function)()--> function call
// to use IIFE we should use ; for the before statement in end of line 98

(function(){
  console.log("i'm subash")
})()





















