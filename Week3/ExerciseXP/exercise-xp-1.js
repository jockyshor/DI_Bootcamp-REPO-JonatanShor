/*Instructions
Create a function call displayNumbersDivisible() that takes no parameter.

In the function, loop through numbers 0 to 500.

Console.log all the numbers divisible by 23.

At the end, console.log the sum of all numbers that are divisible by 23.*/

const displayArr = []
function displayNumbersDivisible(){
   
    for (let i = 0; i <= 500; i++ ){
if (i%23 === 0){displayArr.push(i)}
    }
    console.log(displayArr)
}

const sum = displayArr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;

console.log(sum)


//🌟 Exercise 2 : Shopping List

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

/*Add the stock and prices objects to your js file.

Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

Create a function called myBill() that takes no parameters.

The function should return the total price of your shoppingList. In order to do this you must follow these rules:
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.

Call the myBill() function.*/

const shoppingList = ["banana", "orange", "apple"]

function myBill(){
let totalBill = 0;
for (item of shoppingList){
    if (stock[item] !== undefined && stock[item] > 0){
        stock[item] -= 1;
        totalBill += price[item]
    }
}
return totalBill
}



/*Exercise 3 : What’s in my wallet ?
Instructions
Note: Read the illustration (point 4), while reading the instructions

Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
an item price
and an array representing the amount of change in your pocket.

In the function, determine whether or not you can afford the item.
If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

Change will always be represented in the following order: quarters, dimes, nickels, pennies.*/



function changeEnough(itemPrice, amountOfChange){
let totalChange = 0; 
totalChange += (amountOfChange[0]*0.25);
totalChange += (amountOfChange[1]*0.1);
totalChange += (amountOfChange[2]*0.05);
totalChange += (amountOfChange[3]*0.01);

if (totalChange >= itemPrice){return true}
else{return false}

}

/*
A quarters is 0.25
A dimes is 0.10
A nickel is 0.05
A penny is 0.01
*/

changeEnough(4.25, [25, 20, 5, 0])


/* Exercise 4 : Vacations Costs
Instructions
Let’s create functions that calculate your vacation’s costs:

Define a function called hotelCost().
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel.

Define a function called planeRideCost().
It should ask the user for their destination.
If the user doesn’t answer or if the answer is not a string, ask again.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300$

Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental.

Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

Call the function totalVacationCost()

Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
*/

function hotelCost(){
    let totalCost = 0;
    let question;
    do{question = Number(prompt("Type the amount of nights you will stay at the hotel"))
    }while(isNaN(question) || question <= 0);
totalCost += 140*question
return totalCost
}

function planeRideCost(){
    let flightCost;
    let question;
 do{question = prompt("Type the destination:  ").toLowerCase()
    }while(question === "" || question === null);
    if (question === "london"){flightCost = 183}
    else if (question === "paris"){flightCost = 220}
    else{flightCost = 300}
    return flightCost
}

function rentalCarCost(){
 let totalCost = 0;
    let days;
    do{days = Number(prompt("Type the amount of days you will rent the car: "))
    }while(isNaN(days) || days <= 0);
    if(days >= 10){totalCost = days * 38}
    else{totalCost = days * 40}
    return totalCost
}

function totalVacationCost(){
    costOfVacations = (hotelCost() + planeRideCost() + rentalCarCost())
    return costOfVacations
}

console.log(totalVacationCost())

/*Exercise 5:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div id="container">Users:</div>
<ul class="list">
    <li>John</li>
    <li>Pete</li>
</ul>
<ul class="list">
    <li>David</li>
    <li>Sarah</li>
    <li>Dan</li>
</ul>
</body>
<script src="exercise-5-day1.js"></script>
</html>
*/

/* Add the code above, to your HTML file

Using Javascript:
Retrieve the div and console.log it
Change the name “Pete” to “Richard”.
Delete the second <li> of the second <ul>.
Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

Using Javascript:
Add a class called student_list to both of the <ul>'s.
Add the classes university and attendance to the first <ul>.

Using Javascript:
Add a “light blue” background color and some padding to the <div>.
Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
Change the font size of the whole body.
*/
console.log(document.getElementById("container"))

let firstUl = document.getElementsByClassName("list")[0]

firstUl[1][0].innerHTML = "Richard"

let secondUl = document.getElementsByClassName("list")[1]

secondUl[1].remove()

let uls = [firstUl, secondUl]
for (ul of uls){
    ul.children[0].innerHTML = "Jocky"
}

for (let ul of uls){
    ul.classList.add("student_list");
}

firstUl.classList.add("univeristy", "attendance")

const div = document.getElementById("container")

div.setAttribute("style", "background-color: lightblue; padding: 30px;")

secondUl.children[secondUl.length].style.display = "none";

firstUl.children[1].style.border = "2px solid blue";

document.body.setAttribute("style", "font-size: 2rem;")

/*Exercise 6

<div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div>

*/

/*Add the code above, to your HTML file

Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

We are going to add a new <li> to the <ul>.
First, create a new <li> tag (use the createElement method).
Create a new text node with “Logout” as its specified text.
Append the text node to the newly created list node (<li>).
Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
*/

document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation");

let ul = document.getElementsByTagName("ul")[0];

let newli = document.createElement("li");
let newanchortag = document.createElement("a");
newanchortag.textContent = "href="#">LogOut"

newanchortag.appendChild(newanchortaginfo);

newli.appendChild(newanchortag);

ul.appendChild(newli);

let forDisplay = [ul.firstElementChild.textContent, ul.lastElementChild.textContent];

console.log(forDisplay)

/* EXERCISE 7

In the body of the HTML page, create an empty section:
<section class="listBooks"></section>

In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
title,
author,
image : a url,
alreadyRead : which is a boolean (true or false).

Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

Requirements : All the instructions below need to be coded in the js file:
Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
For each book :
You have to display the book’s title and the book’s author.
Example: HarryPotter written by JKRolling.
The width of the image has to be set to 100px.
If the book is already read. Set the color of the book’s details to red.
*/
let section = document.getElementsByClassName("listBooks")

let allBooks = [
{title: "Harry Potter",
author: "JK Rolling",
image: "https.....img.harry",
alreadyRead: false},
{title: "El Alquimista",
author: "Paulo Cohelo",
image: "https.....imagen.png",
alreadyRead: false},
{title: "Viaje al centro de la tierra",
author: "Julio Verne",
image: "https....foto.png.",
alreadyRead: false}
]

function renderBook(bookDict){
    divForBook = document.createElement("div");
    imageForBook = document.createElement("img");
    divForBook.textContent = `${bookDict.title} written by ${bookDict.author}`;
    imageForBook.src = bookDict.image;
    imageForBook.style.width = "100px"
    divForBook.appendChild(imageForBook);
    divForBook.setAttribute("class", "createdByFunc");
    if (bookDict.alreadyRead === true){divForBook.style ="color: red"}
    section.appendChild(divForBook)
}
renderBook(allBooks[0])
renderBook(allBooks[1])
