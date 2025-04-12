let str1="madam"
let ans=""
let n=str1.length

for (let i = 0; i < n; i++) {
    if (!ans.includes(str1.charAt(i))) {
        ans+=str1.charAt(i)
    }    
}
console.log(ans)