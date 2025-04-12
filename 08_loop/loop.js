let student = [
  {
    sid: 1,
    sname: "A",
    age: 10,
    skills: ["java", "js"],
    address: {
      city: "chennai",
      pin: 123456,
    },
  },
  {
    sid: 2,
    sname: "B",
    age: 11,
    skills: ["ava", "js"],
    address: {
      city: "chennai",
      pin: 123456,
    },
  },
  {
    sid: 3,
    sname: "C",
    age: 12,
    skills: ["va", "js"],
    address: {
      city: "chennai",
      pin: 123456,
    },
  },
];

console.log(student[2]);
console.log(student[0].sid);
console.log(student[0].skills);
console.log(student[0].skills[1]);
console.log(student[2].address.pin);

student.map((element) => {
  console.log(element);
});
student.map((element) => {
  console.log(element.skills);
});
student.map((element) => {
  console.log(element.skills[0]);
});

// !for-in loop for array
// for-in loop in array it will take index
let arr = [10, 20, 30, 40];
for (let index in arr) {
  console.log(index);
}

// ! for-of loop for array
// for-of loop -> it will take the elements of the array
for (let element of arr) {
  console.log(element);
}

// for-in loop in object will take the keys
let ob = {
  name: "abc",
  age: 9,
  city: "chennai",
};

for (let key in ob) {
  console.log(key);
}

// for-of loop is not applicable for object
// for(let ele of ob){
//     console.log(ele);   // ob is not iterable

// }

// ! for-in string
let str ="olla"
for(let index in str){
    console.log(index);
}
// ! for-of string
let str1 ="ABCDEFGH"
for(let index of str1){
    console.log(index);
}