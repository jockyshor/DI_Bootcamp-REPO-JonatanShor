<!DOCTYPE html>
    <html>
    <head>
        <style>
        p {
          background: yellow;
          color: red;
        }
        </style>
    </head>
    <body>
        <div id="container"></div>
        <button id="clear">Clear Interval</button>
    </body>
    </html>

/* Part I
In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will alert “Hello World”.


Part II
In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


Part III
In your Javascript file, using setInterval, call a function every 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
The interval will be cleared (ie. clearInterval), when the user will click on the button.
Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
*/

function hello(){
    alert("Hello world")

}

setTimeout(hello, 2000)

let div = document.getElementById("container")

function paragraph(){
    let newP = document.createElement("p");
    newP.textContent = "Hello World";
    div.appendChild(newP);
}

setTimeout(paragraph, 2000)


let button = document.getElementById("clear")

var flag = false

button.onclick = function flagOn(){
flag = true
}


let theInterval = setInterval(function(){
if (flag === false || div.children.lenght === 5){
    clearInterval(theInterval);
    return
}
paragraph()
},2000)

//Exercise 2 : Move the box
//Instructions
<!DOCTYPE html>
    <html>
    <head>
        <style>
        #container {
          width: 400px;
          height: 400px;
          position: relative;
          background: yellow;
        }
        #animate {
          width: 50px;
          height: 50px;
          position: absolute;
          background-color: red;
        }
        </style>
    </head>
    <body>
        <p><button onclick="myMove()">Click Me</button></p>
        <div id="container">
          <div id="animate"></div>
        </div>
    </body>
    </html>


/*Copy the code above, to a structured HTML file.
In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
Hint : use clearInterval as soon as the box reaches the right end side of the container
Hint : check out the demonstration in the Course Noted named JS Functions*/

function myMove(){
const animateDiv = document.getElementById("animate")

const containerDiv = document.getElementById("container")
let position = 0
let maxRight = containerDiv.clientWidth - animateDiv.clientWidth;

let timer = setInterval(function(){
if (position === maxRight){clearInterval(timer)}
else{
    position++;
    animateDiv.style.left = position + "px";
}


    },1)
}