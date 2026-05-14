
/*Instructions
Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
Allow the user to delete a specific gif by clicking the DELETE button.
Allow the user to remove all of the GIFs by clicking a DELETE ALL button.*/

 async function createGIF(e){
    e.preventDefault();

    let userInput = document.getElementById("categoryInput").value.toLowerCase();

    if(!userInput){return};

    try{
        let render = fetch(`https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
        let json = await render;
        let jsObj = await json.json();

        let imgInner = jsObj.data[0].images.fixed_height.url

        let div = document.createElement("div");
        div.style.display = "flex";
        div.style.padding = "10px";
        div.style.textAlign = "center";
        div.style.alignItems = "center";
        div.style.gap = "10px"
        container.appendChild(div);

        let dltBtn = document.createElement("btn"); 
        dltBtn.className = "button"
    

        dltBtn.textContent = "Delete";
        

        
        let img = document.createElement ("img");
        img.src = imgInner
        div.appendChild(img);
        div.appendChild(dltBtn)

        dltBtn.addEventListener( "click", function () { 
            div.remove() })
        
        form.reset();
        }
    catch(error){
        alert(`there has been an error :( ${error}`)
    }



} 

let generateBtn = document.getElementById("generateBtn");

let form = document.getElementById("mainform");


form.addEventListener("submit", createGIF);

const deleteAllBtn = document.getElementById("deleteAllBtn");
const container = document.getElementById("gifContainer");

deleteAllBtn.addEventListener("click", () => {
    container.innerHTML = ""
})



