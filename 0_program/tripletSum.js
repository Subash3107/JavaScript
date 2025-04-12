let arr=[1,4,4,5,6,10,8];
let target = 13;
for(let a=0;a<arr.length-2;a++)
    for(let b=a+1;b<arr.length-1;b++)
        for(let c=b+1;c<arr.length;c++)
            if(arr[a]+arr[b]+arr[c]==target)
                console.log(arr[a],arr[b],arr[c]);
            