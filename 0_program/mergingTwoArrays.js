let arr3 = []
let arr1 = [2,9,12,18]
let arr2 = [3,5,11,20,25,30,35]
let n1 = arr1.length
let n2 = arr2.length
let i=0,j=0
while(i<n1 && j<n2)
{
    if(arr1[i]<arr2[j]){
          arr3.push(arr1[j])
          i++
    }
    else{
        arr3.push(arr2[j])
        j++
    }
}
while(i<n1)
    arr3.push()
console.log(arr3);

