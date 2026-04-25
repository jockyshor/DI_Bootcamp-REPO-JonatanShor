/*In todays exercise we will be creating a Mad Libs game.
If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

In this exercise you work with the HTML code presented below.

Follow these steps :

Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
Make sure the values are not empty
Write a story that uses each of the values.
Make sure you check the console for errors when playing the game.
Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.*/

/*
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title>Challenge: Mad Libs</title>
 </head>
 <body>

    <h1>Mad Libs</h1>

    <form id="libform">
        <label for="noun">Noun:</label><input type="text" id="noun"><br>
        <label for="adjective">Adjective:</label><input type="text" id="adjective"><br>
        <label for="person">Someone's Name:</label><input type="text" id="person"><br>
        <label for="verb">Verb:</label><input type="text" id="verb"><br>
        <label for="place">A place:</label><input type="text" id="place"><br>
        <button id="lib-button">Lib it!</button>
    </form>

    <p>Generated story: 
    <span id="story"></span>
    </p>

    <script src="..."></script>

 </body>
</html>

*/

let form = document.getElementById("libform")

let noun = document.getElementById("noun")
let adjective = document.getElementById("adjective")
let personName = document.getElementById("person")
let verb = document.getElementById("verb")
let place = document.getElementById("place")
let button = document.getElementById("lib-button")

let story = document.getElementById("story")


form.addEventListener("submit", createStory);

function createStory(e){
    e.preventDefault();
    if (noun.value === "" || adjective.value === "" || personName.value === "" || verb.value === "" || place.value === "") {
        alert("Please fill in all the fields before submitting!");
        return;
    }
    let newDiv = document.createElement("p");
    newDiv.textContent = `"On the planet ${place.value}, there lived a ${adjective.value} ${noun.value}. One day, ${personName.value} arrived and decided to ${verb.value} across the landscape. It was truly the most ${adjective.value} sight in the galaxy.`;
    story.appendChild(newDiv)}

}



// "On the planet [Place], there lived a [Adjective] [Noun]. One day, [Person] arrived and decided to [Verb] across the landscape. It was truly the most [Adjective] sight in the galaxy."