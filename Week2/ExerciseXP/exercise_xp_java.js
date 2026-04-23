//🌟 Exercise 1 : List of people
/*Instructions
const people = ["Greg", "Mary", "Devon", "James"];


Part I - Review about arrays
Write code to remove “Greg” from the people array.

Write code to replace “James” to “Jason”.

Write code to add your name to the end of the people array.

Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

Write code to make a copy of the people array using the slice method.
The copy should NOT include “Mary” or your name.
Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
Hint: Check out the documentation for the slice method

Write code that gives the index of “Foo”. Why does it return -1 ?

Create a variable called last which value is the last element of the array.
Hint: What is the relationship between the index of the last element in the array and the length of the array?


Part II - Loops
Using a loop, iterate through the people array and console.log each person.

//Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
//Hint: take a look at the break statement in the lesson*/



const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0,1)

console.log (people)

people.splice(3,1, "Jason")
people.splice(people.length, 0, "Jocky")

console.log(people.indexOf("Mary"))

let peopleCopy = people.slice(1)

people.indexOf("Foo") // returns -1 because "Foo" its not included in the array

let last = people.slice(people.lenght)

for (person in people){
    console.log(person)
    if (person === "Devon"){break};
}

/*🌟 Exercise 2 : Your favorite colors
Instructions
Create an array called colors where the value is a list of your five favorite colors.
Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
Hint : create an array of suffixes to do the Bonus*/


let favColors = ["white", "black", "green", "orange", "purple"]

for (let i = 0; i < favColors.lenght; i++){
    console.log(`My ${i} choice is ${favColors[i]}`)
}

/*🌟 Exercise 3 : Repeat the question
Instructions
Prompt the user for a number.
Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

While the number is smaller than 10 continue asking the user for a new number.
Tip : Which while loop is more relevant for this situation?*/

let userNum;
do{
    userNum = number(prompt("choose a number: "))
}while (userNum < 10)





/*Copy and paste the above object to your Javascript file.*/

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

/*Console.log the number of floors in the building.

Console.log how many apartments are on the floors 1 and 3.

Console.log the name of the second tenant and the number of rooms he has in his apartment.

Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.*/


console.log(building.numberOfFloors)

console.log(`There are ${building.numberOfAptByFloor.firstFloor} apartments in the first floor`)
console.log(`There are ${building.numberOfAptByFloor.thirdFloor} apartments in the third floor`)

if ( (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]) > building.numberOfRoomsAndRent.dan[1] ){
    building.numberOfRoomsAndRent.dan[1] = 1200
}

/*Instructions
Create an object called family with a few key value pairs.
Using a for in loop, console.log the keys of the object.
Using a for in loop, console.log the values of the object.*/

const family = {
    surname: "García",
    membersCount: 4,
    isHappy: true,
    city: "Madrid",
    members: ["Ana", "Luis", "Sofía", "Carlos"]
};

for (key in family){
    console.log(key)
}

for(let key in family){
    console.log(family[key])
}


const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
 //Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”

let result = " "
for (d in details){
   result += d + " " + details[d];
}
console.log(result)


//Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

/*A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
Hint: a string is an array of letters
Console.log the name of their secret society. The output should be “ABJKPS”*/

let sorted = names.sort()
let secretSoc = ""
for (let n in sorted){
secretSoc += sorted[n][0]
}
console.log(secretSoc)
