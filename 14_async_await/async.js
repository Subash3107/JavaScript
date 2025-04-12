let getData = async () => {
  let fetchedData = await fetch("https://fakestoreapi.com/products"); //The await keyword pauses the execution of the function until the promise returned by fetch is resolved, storing the response in the variable fetchedData.
  console.log(fetchedData);
  // let jsonData1 = fetchedData.json()
  // console.log(jsonData1); //Promise { <pending> }
  let jsonData2 = await fetchedData.json(); // await to wait for the promise to resolve
  console.log(jsonData2);
  jsonData2.forEach((element) => {
    console.log(element.title, element.price, element.rating.rate)
  });
};
getData();

