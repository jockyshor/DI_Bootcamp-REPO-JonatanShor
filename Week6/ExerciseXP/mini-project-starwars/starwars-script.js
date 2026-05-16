


let btn = document.getElementById("findSomeone");

let div = document.getElementById("displayContainer");


async function findSomeone(e){
    e.preventDefault();

    div.innerHTML = ""

    let loader = document.createElement("i");
    loader.className = "fa-solid fa-sync fa-spin";
    loader.style.display = "inline";
    div.appendChild(loader);

    let randomCharacter = Math.floor(Math.random()*83) + 1;


    try{
        let res = await fetch(`https://www.swapi.tech/api/people/${randomCharacter}/`)
        
        if(!res.ok){throw new Error (error, "Errror")}

        let jsonResponse = await res.json()
        let data = jsonResponse.result.properties;
                    

        loader.style.display = "none";

        let h1 = document.createElement("h1");
        h1.innerHTML =  "Name: " +data.name;
        div.appendChild(h1);

        let pHeight = document.createElement("p");
        pHeight.innerHTML = "Height: "+data.height;
        div.appendChild(pHeight);

        let pGender = document.createElement("p");
        pGender.innerHTML = "Gender: "+data.gender;
        div.appendChild(pGender);

        let pBirthYear = document.createElement("p");
        pBirthYear.innerHTML = "Birth Year: "+data.birth_year;
        div.appendChild(pBirthYear);

        let hwData = await fetch(data.homeworld);
        if(!hwData.ok){
                throw new Error (error, "algo paso")}

        let hwDataJson = await hwData.json();
        let homeplanet = hwDataJson.result.properties.name
        
        
        let pHomePlanet = document.createElement("p");
        pHomePlanet.innerHTML = "Home World: "+homeplanet;
        div.appendChild(pHomePlanet)
        

        }
    catch(error){
        loader.style.display = "none";

        let message = document.createElement("h1");
        message.innerHTML = "Oh nooooooo, something weird is happening, try again pressing the button...";
        div.appendChild(message)
    }

}


btn.addEventListener("click", findSomeone);
