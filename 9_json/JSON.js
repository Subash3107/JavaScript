// JSON --> JAVA SCRIPT OBJECT NOTATION
// ! Definition:

// JSON (javaScript Object Notation) is a lightweight data.interchange format that is easy for humans to read and write , and easy for machines to parse and generate.

// ! Advantages of JSON

// ? Human-Readable:
// JSON's structure is easy for developers to understand and write.

// ? Lightweigt:
// JSON is a minimal format that reduces the size of the data being transmitted.

// ? language-Independent:
// JSON can be used with many programming languages, including javascript, python, ruby,java,etc

let student ={
    sid: 1,
    sname: "A",
    age: 10,
    skills: ["java", "js"],
    address: {
      city: "chennai",
      pin: 123456,
    }}
console.log(student);

// ! JSON.stringify()
// it will convert any javascript object to json
let jsonData = JSON.stringify(student)
console.log(jsonData);
console.log(typeof jsonData);

// ! JSON.parse()
// it will convert JSON to javascript object
let ob2= JSON.parse(jsonData)
console.log(ob2)
console.log(typeof ob2);
