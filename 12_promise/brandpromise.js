let isMobileInWarrenty = true;
let isMobileDamaged = true;

let warrentyStatus = function (isMobileInWarrenty, isMobileDamaged) {   // these 2 parameters takes value from the method call not from the variable
    return new Promise((resolve, reject) => {
        if (isMobileInWarrenty && isMobileDamaged) {
            resolve("Mobile is in warranty and it will replaced with new mobile");
        } else if (isMobileDamaged && !isMobileInWarrenty) {
            resolve("Mobile is damaged and it will be repaired (charges applied!)");
        } else if (!isMobileDamaged && isMobileInWarrenty) {
            resolve("Your mobile phone is good to go");
        } else {
            reject("Mobile is not damaged and not in warranty");
        }
    })
}

warrentyStatus(isMobileInWarrenty, isMobileDamaged).then(message => {
    console.log(message);
}).catch(message => {
    console.log(message);
}).finally(
    () => console.log("Finally block executed")
)