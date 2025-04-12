let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getTime());
console.log(now.getHours());
console.log(now.getTimezoneOffset());
console.log(now.getSeconds());
console.log(now.getTime());
console.log(now.getMonth());


// today is 31 december and today is tuesday
let date=now.getDate();
let month=now.getMonth();// this will return a interger value (n-1)
let day=now.getDay();// this will return a integer value (n-1)
console.log(`today is ${date} ${month} and today is ${day}`);

let mon=["january",'february','march','april','may','june','july','august','september','octomber','november','december']
let days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
console.log(`today is ${date} ${mon[month]} and today is ${days[day]}`);

let heading=document.getElementById("heading1");
heading.innerText=`today is ${date} ${mon[month]} and today is ${days[day]}`

let getTime = ()=>{
    let hour =now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();

    let h2=document.getElementById("time");
    h2.innerText=`${hour} : ${min} : ${sec}`
}
getTime()