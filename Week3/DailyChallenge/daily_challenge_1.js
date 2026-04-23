/*Instructions
In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
We will provide the HTML page.
You only have to work with a JS file.

Create an array which value is the planets of the solar system.
For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
Finally append each div to the <section> in the HTML (presented below).
Bonus: Do the same process to create the moons.
Be careful, each planet has a certain amount of moons. How should you display them?
Should you still use an array for the planets ? Or an array of objects ?*/

/*
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Challenge: Create a solar system</title>
        <style>
            body {
                background-color: black;
                padding: 10px;
            }
            .planet {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                text-align: center;
                padding: 10px;
                position: relative;
                border: 2px solid white;
            }
            .moon {
                position: absolute;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: rgb(237, 237, 237);
                border: 5px solid red;
            }
        </style>
    </head>
    <body>

    <section class="listPlanets"></section>

    <script src="..."></script>
    </body>
</html>

*/

let planetArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]


function getRandomColor() { //function from the internet to get random color
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let section = document.getElementsByClassName("listPlanets")[0]


function renderPlanet(planet){
    let planetDiv = document.createElement("div");
    planetDiv.setAttribute("class", "planet");
    planetDiv.textContent = planet;
    planetDiv.setAttribute("style", `background-color: ${getRandomColor()};`);
    section.appendChild(planetDiv)
}

for (planet of planetArray){
    renderPlanet(planet)
}

// for doing the same for the moons, we should use an object, where the key is the planet¨s name, and the value is the amount of moons the planet has. 
// we modify the function to create divs or spans inside every´s planet´s div, according to the amount they have (we know that from the object)
//finally give each of the moons a different color, make sure its not the same as the planets div, and we could also give them floating attribute for them to be around the planet

