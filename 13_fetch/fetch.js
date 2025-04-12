// https://fakestoreapi.com/docs
// fetch is used to fetch data from api
// API is used for communication between two application

let fetchedData = fetch("https://fakestoreapi.com/products")
// console.log(fetchedData)    // Promise { <pending> }
fetchedData.then((data)=>{
    // console.log(data); // it will give response we should convert it to json
    // console.log("hi how are you");   // --> for checking wether the block is executing
    let jsonData =data.json();  // it will convert the response to json 
    // console.log(jsonData)    //Promise { <pending> }
    jsonData.then((finalData)=>{
        console.log(finalData);
    }).catch((err)=>{
        console.log(err);
    })
}).catch((err)=>{
console.log(err);
}).finally(
    console.log('promised is made') 
)