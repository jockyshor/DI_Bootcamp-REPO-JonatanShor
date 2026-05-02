//Instructions
//Analyse the code below, and predict what will be the value of a in all the following functions.
//Write your prediction as comments in a js file. Explain your predictions.
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared -- i think it will throw a TypeError, because "a" is only declared inside the function, and cannot be accesed in the global scope.
// "a" will be 3
// with const instead of let ? --- still, will throw an error because it is declared inside the function, and also cannot change the value of const variables...

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared  --- after running the functions in that order, the value of "a" will be 5
// with const instead of let ?
// --- you will get an error because you cannot change the value of a variable declared with const

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared -- if it is declared outside the function, you will get 1 as the value of "a", bacuse a=test is only relevant inside the funcSix

// with const instead of let ? -- you will get the value of the varibale declared outside the function

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared you will get the value of the variable  --- bacuause you are using let a = 5 inside the if, then it sill not change the value of the a = 2, but it will say that a = 5 inside the function
// with const instead of let ?, -- the same


/* EXERCXISE 2
Instructions
Using the code below:*/

function winBattle(){
    return true;
}
/*Transform the winBattle() function to an arrow function.*/
let winBattle = () => {return true}

//Create a variable called experiencePoints.
let experiencePoints
/*Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
Console.log the experiencePoints variable.*/

experiencePoints = winBattle() === true ? experiencePoints = 10 : experiencePoints = 1;
console.log(experiencePoints)
// or
let experiencePoints = winBattle() ? 10 : 1;
/*🌟 Exercise 3 : Is it a string ?
Instructions
Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
Check out the example below to see the expected output
Example:

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

*/

let isString = (something) => {
    if (typeof something !== "string"){return false}
    else{return true}
};


/*🌟 Exercise 4 : Find the sum
Instructions
Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
*/

const sum = (a,b)=>{return a+b};

/*🌟 Exercise 5 : Kg and grams
Instructions
Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

First, use function declaration and invoke it.
Then, use function expression and invoke it.
Write in a one line comment, the difference between function declaration and function expression.
Finally, use a one line arrow function and invoke it.*/

function weight1(kilos){
let grams = kilos * 1000
    return grams
}

weight1(3)

const weight2 = (kilos)=>{let grams = kilos * 1000; return grams}

weight(4)
 // the diference is that one is a statement, and the other one is a declaration. we can use a function, before we declare, if it is a statemet. this is call hoisting

const weight=(kilo)=>{return kilo*1000}(5);


 /*🌟 Exercise 6 : Fortune teller
Instructions
Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
*/

const future = ((numOfChildren, partnerName, location, jobTitle)=>{
    let span = document.createElement("span");
    span.textContent = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numOfChildren} kids`; 
    document.body.appendChild(span)
})(4, "Liat", "Peru", "Lawyer")

/*🌟 Exercise 7 : Welcome
Instructions
John has just signed in to your website and you want to welcome him.

Create a Navbar in your HTML file.
In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
The function should add a div in the nabvar, displaying the name of the user and his profile picture.
*/

/*
<nav id="navbar">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
*/
let nav = document.getElementById("navbar")

let usernameObj = {
    name: "John",
    imgsrc: "#imagesource#"
}

((username)=>{
    let div = document.createElement("div");
    let img = document.createElement("img");
    let text = document.createElement("p");
    img.src = username.imgsrc;
    text.innerHTML = username.name;
    div.appendChild(img);
    div.appendChild(text);
    nav.appendChild(div)
})(usernameObj)

/*🌟 Exercise 8 : Juice Bar
Instructions
You will use nested functions, to open a new juice bar.

Part I:
The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


Part II:
In the makeJuice function, create an empty array named ingredients.

The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
*/

function makeJuicept1(size){
    return function addIngredients(firstIngredient, secondIngredient, thirdIngredient ){
        let span = document.createElement("span");
        span.textContent = `The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`;
        document.body.appendChild(span)

    };
}

makeJuicept1("large")("orange", "spinach", "papaya")


function makeJuicept2(size){
    function addIngredients(firstIngredient, secondIngredient, thirdIngredient ){
        let span = document.createElement("span");
        span.textContent = `The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`;
        document.getElementsByTagName("body")[0].appendChild(span)
        ingredients.push(firstIngredient, secondIngredient, thirdIngredient);
    };
    let ingredients =[

    ]

    function displayJuice()
}
// instructions are not clear for part 2, i dont understand what are they asking me to do