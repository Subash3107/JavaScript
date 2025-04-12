let n2='madaM'
let ch2=n2.split('')
let n=ch2.length

for (let index = 0; index < n/2; index++) {
    let temp=ch2[index]
    ch2[index]=ch2[n-1-index]
    ch2[n-1-index]=temp
    
}
let rev=ch2.join('')
if (rev==n2) {
 console.log("Palindrome")   
}
else
console.log("Not Palindrome")

