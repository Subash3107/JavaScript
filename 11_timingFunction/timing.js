// ! setTimeout
// syntax : setTimeout(callbackFunction,time)
//it is used to execute the function after the specified time.

let a = () => {
    console.log("hi how are you");
}
setTimeout(a, 5000)

setTimeout(() => {
    console.log('i am setTimeout');
}, 4000)

// ! clearTimeout

let timeout = setTimeout(() => {
    console.log("i am ❤️");
}, 3000)
clearTimeout(timeout)

// ! setInterval
// let sorry = ()=>{
//     console.log("one piece☠️");
//     console.log("🍑🍆💦💦");

// }
// setInterval(sorry,1000)

// ! clearInterval

let interval = setInterval(() => {
    console.log("i am clearInterval");
}, 1000)
setTimeout(() => { (clearInterval(interval)) }, 5000)