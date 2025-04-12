let prime = (num) => {
    let flag = false
    for(let i=2;i<=num;i++){
        if(num%i==0){
            flag =true
        }  
    }
    if(flag)
        console.log(num + "  is a prime number");
    else
        console.log(num + " is not a prime number")
}
prime(13)