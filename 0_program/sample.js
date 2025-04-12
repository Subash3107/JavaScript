function a() {
    console.log(b().a);
    console.log(b)

  function b() {
    var a = 10;
    console.log(a);
    let b = 20;
    console.log(b)
  }
}
a();
// console.log(b); // hoisting
// var b = 25;
// let a = 20;
// console.log(a);
