// Higher order methods in arrays
// ! 1. forEach()
// forEach is used to print the elements based on index. we can pass three arguements to it. first is the element, second is the index and third is the array itself.
let arr1 = [10, 20, 30, 40, 50];
arr1.forEach((element, index, array) => {
  console.log(element, index, array);
});

// sample program
// 1. hardcoding for filter method
let arr2 = [];
arr1.forEach((element) => {
  if (element > 30) arr2.push(element);
});
console.log(arr2);

// 2. hardcoding for map method
let arr4 = [];
let arr3 = [110, 120, 130, 140, 150];
arr3.forEach((element) => {
  // arr3.push(element+100)   // it will add 100 to each element from index 5 to 9
  arr4.push(element + 100);
});
console.log(arr4);

// 3. hardcoding for reduce method
let arr5 = 0;
arr4.forEach((a) => {
  arr5 += a;
});
console.log(arr5); //1150
// all the methods return something but
// forEach method will not return anything. it will return undefined. so we can't use it in a function.
let arr6 = arr3.forEach((a) => {
  return a;
});
console.log(arr6); //undefined

// it will traverse the array and can be used with relational operators
// ! 2. filter method

// filter method can take 3 parameters . first is the element, second is the index and third is the array itself.
let filteredarray = arr1.filter((a) => {
  return a > 30;
});
console.log(filteredarray);
// ! one line filter method
let filteredarray2 = arr1.filter((a) => a > 30);
console.log(filteredarray2);

// map method can take 3 parameters. and can be used with arithmatic operators
// ! 3. map method
let mappedarray = arr1.map((a) => {
  return a + 100;
});
console.log(mappedarray);

// ! one line map method
let mappedarray2 = arr1.map((a) => a + 100);
console.log(mappedarray2);

// reduce take 4 parameters . first is the accumulator, second is the current element, third is the index and fourth is the array

// ! 4.reduce method
let reducedarray = arr1.reduce((accumulator, element) => {
  return accumulator + element;
});
console.log(reducedarray);

// ! one line reduce method
let reducedarray2 = arr1.reduce(
  (accumulator, element) => accumulator + element
);
console.log(reducedarray2);

// ! sort() method
// ascending order --> a-b
let array = [1, 7, 3, 5, 9, 4];
let sortedarray = array.sort((a, b) => {
  return a - b;
});
console.log(sortedarray); // [1, 3, 4, 5, 7, 9]
// decending order --> b-a
let sortedarray2 = array.sort((a, b) => b - a);
console.log(sortedarray2); // [9, 7, 5, 4, 3, 1]
