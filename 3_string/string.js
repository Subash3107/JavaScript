// how to declare a string
let str1 = "hello"
let str2 = 'HELLO'
let str3 = `hello`

//! string interpolation
// String interpolation is a programming concept that allows you to embed variables or expressions within a string. It provides a way to create strings dynamically by substituting placeholders with actual values.
// string interpolation is possible only in backtick
let name='subash'
console.log(`My name is ${name}`); // Output: My name is subash

// how to know the length
let length = str1.length
console.log(length) // 5
console.log(str2.length) // 5

// ? string methods

// ! 1. toUpperCase()

// It is used to convert the string into upper case and it will return one new string (it will not change the original string)

let upper = str1.toUpperCase()
console.log(upper) // it will convert the original string into upper case and return a new string
console.log(str1) // str1 remains original

// ! 2. toLowerCase()

// it is used to convert the string into lower case and it will return one new string (it will not change the original string)

let lower = str2.toLowerCase()
console.log(lower);

// ! 3. indexOf()
// indexOf() will return only the index of first specified element
let str4 = "hello, who are you"
let index = str4.indexOf('o')
console.log(index);

// ! 4. charAT()
//this method is used to give the character of the specified index
let character = str4.charAt(3)
console.log(character)

// ! 5. concat()
// it is used to combine two or more than 2 strings and it will return one new string
let str5='hello'
let str6="how are you"
let concat = str5.concat(" ",str6," subash")
console.log(concat);

// ! 6. trim()
// it is used to remove the white spaces from both the sides of the string and it will return one new string.
let str7="   ollla  "
console.log(str7);
console.log(str7.length); //10

let trim = str7.trim()
console.log(trim);
console.log(trim.length); //5

// ! 7. includes()
//it is used to check whether any character or string is present or not.
// if it is present it will give true otherwise it will give false.
let str8 ="hi who are you"
console.log(str8.includes('b')); //false
console.log(str8.includes('i')); //true
console.log(str8.includes("are")); //true

// ! 8. startswith()
let str9 = "subash"
let startswith=str9.startsWith('s')
console.log(startswith); //true

// ! 9. endswith()
let endswith=str9.endsWith('h')
console.log(endswith); //true

// ! 10. split()
// it is used to convert any string to array
let str10 = "hi i'm fine"
let split1 = str10.split(" ")
console.log(split1);    // [ 'hi', "i'm", 'fine' ]
let split2 = str10.split("")
console.log(split2);    // ['h', 'i', ' ', 'i',"'", 'm', ' ', 'f','i', 'n', 'e']
let split3 = str10.split("i")
console.log(split3);    // [ 'h', ' ', "'m f", 'ne' ]

// ! 11. slice()
// it is used to extract the character or string from another string.
// it will take two parameters, (startindex and end index)
// it will include start index but will not includes the end index values

let str11 = "hello how are you"
let slice1 = str11.slice(2,8)
console.log(slice1);

// if end index is not specified it will print from the start index till the length of the string
let slice2 = str11.slice(2,)
console.log(slice2);

// negative index starts from end of the string from -1 to length of the string 
let slice3 = str11.slice(2,-2)
console.log(slice3); // llo how are y

// start index is specified as negative value
let slice4 = str11.slice(-3)
console.log(slice4); // you

// we cannot give start index greater than end index
let slice5 = str11.slice(4,0)
console.log(slice5) // empty

// ! 12. substring()
// it is used to extract the character or string from another string
// it will take twoo parameters, (startIndex and endIndex)
// it will not includes the endIndex value.

let str12 = "good morning soldiers"
let substring1 = str12.substring(1,6)
let substring2 = str12.substring(-4,8)// we can't give negative value. it will be converted to 0 
let substring3 = str12.substring(7,1)   // we can't give start index greater than end index . it will be swapped
console.log(substring1)
console.log(substring2)
console.log(substring3)