async function getData(url){
    try {
        const res = await fetch(url);
        const data = await res.json();
        render(data);
    } catch (error) {
        console.error(error)
        
    }
}

getData('http://localhost:3001/api/products');

rootDiv = document.getElementById("root");

function render(arr){
    const html = arr.map((item)=>{
        return `<div>
            <h2>${item.name}</h2>
            <p>${item.price}</p>
        </div>`
    });

    rootDiv.innerHTML = html.join("");

}


