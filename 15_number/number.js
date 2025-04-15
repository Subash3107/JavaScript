let num1 = 10;
console.log(typeof num1);   // Output: "number"
let num2 = 5.6;
console.log(typeof num2);   // Output: "number"

let num3 = Number(10);      // In JavaScript, Number() is a constructor function that converts a string or other value into a number.
console.log(typeof num3);   // Output: "number"

let num4 = Number("10");    // Number will convert anything into number 
console.log(typeof num4);   // Output: "number"

let num5 = Number("10abc");
console.log(num5);          //NaN (Not a Number)
console.log(typeof num5);   //number

// ! prompt
// when we are taking input from user then we use prompt, the type of the value will be string
// prompt("enter one number") --> it will store the input only in string
let a = Number(prompt("enter one number")); // so we change it to Number
let b = Number(prompt("enter two number"));
alert(a + b);


// ! Number methods
// ! 1. parseInt()
// it will convert the string into integer
let num6 = Number.parseInt("10abc");
console.log(num6); //10

// ! 2. parseFloat()
// it will convert the string into float
let num7 = Number.parseFloat("10.5abc");
console.log(num7); //10.5

// ! 3. isInteger()
// it will check whether the number is integer or not
let num8 = Number.isInteger(10);
console.log(num8); //true

// ! 4. isFinite() 
// it will check whether the number is finite or not
let num9 = Number.isFinite(10);
console.log(num9); //true
console.log(Number.isFinite("0")); // false  
console.log(Number.isFinite(null)); // false  

// ! 5. isNaN()
// it will check whether the number is not a number or not
let num10 = Number.isNaN(10);
console.log(num10); //false

