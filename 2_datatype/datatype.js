// ! datatypes in java script

// ! 1. primitive datatype

// ! 1. number datatype
let num1 = 10
console.log(num1);
console.log(typeof num1); // number

let num2 = 20.6
console.log(num2);
console.log(typeof num2) // number

let num3 = Number("333")
console.log(num3);  //333
console.log(typeof num3) // number

// ! 2. boolean datatype
var flag = true
console.log(flag);
console.log(typeof flag); // boolean

// var flag = boolean(false) //! this is not possible flag name is already taken
var flag = false
console.log(flag);
console.log(typeof flag); // boolean

// ! 3. string
//? we can declare string in two ways 
// i) by using literal keyword

var name = "subash" // double quotes
console.log(name);
console.log(typeof name); // string

var name = String('A'); // single quotes
console.log(name);
console.log(typeof name); // string

var name = `hello world`    // backtick
console.log(name);
console.log(typeof name); // string

// ii) by using object

let nameobj = new String("subash")
console.log(nameobj);
console.log(typeof nameobj); // object

// ! 4.undefined

let a
console.log(a)
console.log(typeof a)

let b = undefined
console.log(b)
console.log(typeof b) // undefined

// ! 5. null

let b1=null
console.log(b1)
console.log(typeof b1); // object

// ! 6. bigint

let c = BigInt(4564668849959)
console.log(c); // 4564668849959n
co:console.log(typeof c);   // bigint

// ! Non-primitive data type

// ! 1. Array

let arr = [3,"hi",false,undefined]
let size = arr.length
console.log(size);
console.log(arr);

// ! 2. function
// function declaration
function add()
{
    console.log('hello i am add function...')
}
// function call
add()

// ! 3. object
// keys-->sname and values-->"abc"
let student = {
    sname:"abc",
    sid:102,
    phone:9514034599,
    skills:['html','css','javascript'],
    std1:{aadhar:12345,name:'subash'}
}
console.log(student);
console.log(typeof student); // object

