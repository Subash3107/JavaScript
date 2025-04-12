// Declaring variables in javascript ---In 3 ways we can declare variables...
// 1)var num1=10 --D&I Stmt
// var num2
//  num2=20 initialization is possible
// In var reinitialization and redeclaration is possible...2)Variable is a global scope,and it do a variable hosting
// 2) let Let Keyword redeclaration is not possible but reinitialiazation is  possible,let is a local scope,it doesnt do a variable hoisting
// 3)const const redeclaration and reinitialization is not possible

var num1 = 20;
console.log(num1);
var num2;
num2 = 40;
console.log(num2);
var num1 = 40;

// 2.Let Keyword redeclaration is not possible but reinitialiazation is possible

let num3;
num3 = 90;
console.log(num3);
num3 = 120;

// 3.const redeclaration and reinitialization is not possible
const num4 = 89;

console.log("Num4:" + num4);

var num;
num = 20;
console.log(num);

// Var 2)Variable is a global scope,and it do a variable hosting
console.log(a);
var a; //undefined    because var doing a variable hoisting.
a = 20;
console.log(a);
