let appendNumber=(num)=>{
    console.log(num);
    // document.getElementById("text").value=num;
    document.getElementById("text").value+=num;
    
}
let appendOperator=(operator)=>{
    document.getElementById("text").value+=operator
}
let clearScreen=()=>{
    document.getElementById("text").value=''
}
let calculation = ()=>{
    let result=document.getElementById("text").value
    console.log(result);
    document.getElementById("text").value=eval(result)
}
let CE=()=>{
    let result=document.getElementById("text").value
    document.getElementById("text").value=result.slice(0,-1);
}