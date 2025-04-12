// OBJECT CREATION IN JAVASCRIPT

let object = {
  name: "pen",
  price: 20,
  color: ["black", "red", "blue"],
  do: () => {
    console.log("This is a pen");
  },
};

// accessing an element

console.log(object.name);
console.log(object.price);
console.log(object["price"]);

// printing the object
console.log(object);

// modifying an element
object.price = 30;
console.log(object);

// adding a new element
object.brand = "Faber-Castell";
console.log(object);

// deleting an element
delete object.price;
// console.log(object.price); // this will throw an error because price is deleted
console.log(object);

// adding array element inside object
object.color.push("green");
console.log(object);

// call function from object
object.do();

// ? object methods

let student = {
  sname: "abc",
  age: 20,
  skills: ["java", "html", "css"],
  address: {
    city: "chennai",
    pincode: 602024,
  },
};

console.log(student.address.city);

// ! 1. Object.keys()

// it will return an array where all the keys will be stored as array elements
let keys = Object.keys(student);
console.log(keys);

// ! 2. Object.values()

// it will return an array where all the values will be stored as array elements
let values = Object.values(student);
console.log(values);

// ! 3. Object.entries()

// it will return one array there all the key and value pairs will be stored in each array.
let key_value = Object.entries(student);
console.log(key_value);

// ! 4. Object.freeze()

// it will make the object immutable

console.log(student);
Object.freeze(student);
student.age = 25; // this will not work because object is frozen
console.log(student);
delete student.sname; // this will not work because object is frozen
console.log(student);

// ! 5. Object.isFrozen()
// it will check whether the object is frozen or not
// it will return true if object is frozen otherwise false
console.log(Object.isFrozen(student));

let student1 = {
  sname: "abc",
  age: 20,
  skills: ["java", "html", "css"],
  address: {
    city: "chennai",
    pincode: 602024,
  },
};

// ! 6.Object.seal()
// it is also similar to Object.freeze method but here we cannot delete or modify the elements
// it will make the object immutable but it will not prevent the addition of new properties
// it will prevent the deletion of existing properties
console.log(student1);
Object.seal(student1);
delete student1.sname; // deleting is not possible
console.log(student1);
student1.phone = 9514034599; // adding is not possible
student1.age = 12; // modification is possible
console.log(student1);

// ! 7. Object.isSealed()
// it will check whether the object is sealed or not
// it will return true if object is sealed otherwise false
console.log(Object.isSealed(student1)); // it will return true because object is sealed

// ! 8. Object.assign()
// it is used to combine two or more objects into one object
let ob1 = {
  name: "ab",
  age: 10,
};

let ob2 = {
  city: "chennai",
  phone: 96468799,
};

let combinedObj = Object.assign({}, ob1, ob2); //  {} is used to create a new object
console.log(combinedObj); // it will return { name: "ab", age: 10 , city: "chennai", phone: 96468799 }
console.log(ob1);

// ! 9. hasOwnProperty()
// it is used to check whether the object has a particular property or not
// it will return true if the object has the property otherwise false
console.log(ob2.hasOwnProperty("phone")); // true
console.log(ob2.hasOwnProperty("name")); // false
console.log(combinedObj.hasOwnProperty("sname")); // false


