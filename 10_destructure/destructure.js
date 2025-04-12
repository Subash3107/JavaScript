let student = {
    sid: 1,
    sname: "A",
    age: 10,
    skills: ["java", "js"],
    address: {
      city: "chennai",
      pin: 123456,
    }}

console.log(student.sname)
console.log(student.age)
console.log(student.skills)

// ! object destructre 
// variable name should be same as keys of student no need to maintain the order of variables
let {sid,age,sname,skills}=student
console.log(sid);
console.log(skills);

// ! array destructure
// we can declare any variable name
let arr =[10,20,30,40]
let [a,b,c,d]=arr
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// ! Rest parameter

// the rest parameter is used to group the remaining elements into an array.
// it collects "the rest" of the arguments that were not explicity specified.
// the rest parameter is represented by three dots(...)
let arr1 = [10,20,30,40,50]
let [a1,b1,...c1] = arr1
console.log(a1);
console.log(b1);
console.log(c1);

// ! spread operator
// the spread operator in JS allows to expand an array,object,or iterable into individual elements.
// it is often used to copy, merge, or pass elements.
// the spread operator is represented by three dots(...)
let arr2 = [98,88]
let combinedArray = [...arr1,...arr2]
console.log(combinedArray);

let obj1={
  name:"subash",
  age:22
}
let obj2={
  name:"suba",
  age:21
}
let obj3={...obj1,...obj2}
console.log(obj3)

// ! rest parameter example using fuction

function person(firstname,...details){
  console.log(firstname);
  console.log(details)
}
person("subash","23",123,733)

// ! example for shallow copy
// .push will take effect in arr3 and copy bcuz it is shallow copy
let arr3=[1,2,3,4,5]
let copy=arr3
copy.push(6)
console.log(arr3);
console.log(copy);

// ! example for deep copy
let arr4=[1,2,3,4,5]
let copy1=[...arr4]
copy1.push(6)
console.log(arr4);
console.log(copy1);

copy1.unshift(0)
console.log(arr4);
console.log(copy1);