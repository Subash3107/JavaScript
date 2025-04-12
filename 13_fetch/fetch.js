// https://fakestoreapi.com/docs
// fetch is used to fetch data from api - fetch() function sends an HTTP GET request to the URL. It returns a Promise that resolves to a Response object when the server responds.
// API is used for communication between two application

let fetchedData = fetch("https://fakestoreapi.com/products")    // it will retun a promise that will be either resolved or rejected based on the status of the request  // The fetch() function returns a Promise, not the response itself.
// console.log(fetchedData)    // Promise { <pending> }
fetchedData.then((data) => {    // data will contain a Response object (not the actual product data yet!).
    // console.log(data); // it will give response we should convert it to json
    // console.log("hi how are you");   // --> for checking wether the block is executing
    let jsonData = data.json();  // it will convert the response to json // data.json() also returns a Promise because converting a response to JSON is asynchronous    // ou can only call .json() on the actual Response object, not on the Promise.
    // console.log(jsonData)    //Promise { <pending> }
    jsonData.then((finalData) => {
        console.log(finalData);
    }).catch((err) => {
        console.log(err);
    })
}).catch((err) => {
    console.log(err);
}).finally(
    console.log('promised is made')
)