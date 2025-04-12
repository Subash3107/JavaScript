// !How to Declare

let arr = [12, "Ragul", null, "hello"];
console.log(arr);
console.log(arr[0])

let arrr = [{ name: "Alice" }, { age: 25 }];
console.log(arrr);
console.log(arrr[0].name)


// !How to know the length of array

console.log(arr.length);

// !Methods in Array

// ? 1.push()  ----->Adding an elements in an array at last by using push method and return the modified length.

var arr1 = [10, 20, 34, 89];

let b = arr1.push("Addbypush");
console.log(arr1.push(60)); // 6 --> return the modified length.

console.log(b); // return the modified length.
console.log(arr1);

// ? 2.pop()--->It is used to remove the element at end and it return the removed element
let arr2 = [12, 13, 14, 15];
let c = arr2.pop();// wee can't pass values to pop method it will always remove element from last
console.log(c); // 15 --> return the removed element
arr2.pop()
console.log(arr2);

// ? 3.Unshift--->It is used to add the element at the beginning and it returns the modified length.

let arr3 = [10, 30, 20];

console.log(arr3.unshift(5));
console.log(arr3);

// ? 4.Shift--->It is used to remove the element at the beginning  and it returns the removed elements.

let arr4 = [12, 34, 6, 1, 7];

console.log(arr4.shift());
console.log(arr4);

// ? 5.include()--.It check whether any element is present or not and returns true or false.

console.log(arr4.includes(12));
console.log(arr4.includes(1));

// ? 6.indexOf--->It is used to give the index of the specified element and if elements is not present,it returns -1 as O/P

let arr5 = [1,2,3, "Ragul", 90, 64, 52.1];
console.log(arr5.indexOf("Ragul")); // 3 --> return the index of the element
console.log(arr5.indexOf(100)); // -1 --> return -1 as O/P

// ? 7. Concat() ---> It is used to combined two or more than two arrays and it will return as one array.

let arr6 = [1, 2, 3, 4, 5, 6];
console.log(arr6);

let combarr = arr5.concat(arr6,arr);
console.log(combarr);
// ? 8-Reverse()--It is used to reverse the array and it returns the new array

let rev = arr6.reverse();
console.log(rev);
console.log(rev.reverse());
console.log(combarr.reverse());

// 9-Join()-->Join is used to Converts an array into a string, with elements separated by a specified delimiter.

console.groupEnd("By using Join()");
console.log(arr6.join(""));

let arrr1 = [1, 2, 3];
let str1 = arrr1.join("-");
console.log(str1); // "1-2-3"


// Program
let str = "Ragul";
let sep = str.split("");
// console.log(sep)

let rev1 = sep.reverse();
// console.log(rev1)

let comb1 = rev1.join("");

console.log(str);
console.log(comb1);

console.log(str.split("").reverse().join(""));

// 10)Slice-->It is used to extract new array from another array.
// Returns a shallow copy of a portion of an array without modifying the origina
let arr12 = [64, 19, 4, 1, 18];
console.log(arr12);
let sl = arr12.slice(0, 2);
console.log(sl);

// 11)Splice--->It is used to remove and add the element in an array.

// Description: Adds or removes elements from an array (modifies the original array).
// Syntax: arr.splice(start, deleteCount, item1, item2, ...)
// start: The index to start changes.
// deleteCount: Number of elements to remove.
// item1, item2, ...: Elements to add (optional).

let arr9 = [10, 12, 2, 9, 13, 78];
console.log(arr9);
arr9.splice(2, 3);
console.log(arr9);
console.log(arr9.splice(2,0))
console.log(arr9);

// Adding
let arr10 = [89, 90, 91, 98];
console.log(arr10);
arr10.splice(2, 0, 93, 94, 95, 96, 97);
console.log(arr10);
