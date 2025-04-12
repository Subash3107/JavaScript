let item = document.querySelector(".items")
let fetchedData =async () =>{
    let fetchedData = await fetch("https://fakestoreapi.com/products");
    let jsonData2 = await fetchedData.json();
    jsonData2.map((e)=>{
        let li = document.createElement("li");
        li.innerText=e.title
        item.append(li)
        console.log(e.title);
        
    })
} 
fetchedData()