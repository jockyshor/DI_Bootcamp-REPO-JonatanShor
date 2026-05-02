

/*🌟 Exercise 1 : Colors
Instructions
Using this array :*/

const colors1 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

//Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
colors1.forEach((color, i )=>{let counter = 1; 
    console.log(`#${i + 1} choice is ${color}`);
    })

//Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
//Hint : Use the array methods taught in class. Look at the lesson Array Methods.


function checkColor(someColor){
    if (colors1.some((color)=>{color === someColor}) === true){
    console.log("Yeah")
}
else{
    console.log("No...")
};
    
}

checkColor("Violet")


/*🌟 Exercise 2 : Colors #2
Instructions
Using these arrays :*/

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

/*Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
Hint : Use the array methods taught in class and ternary operator.*/


colors.forEach((color, i) => {
    const n = i + 1; // 1, 2, 3...
    let suffix;

    if (n % 10 === 1 && n % 100 !== 11) {
        suffix = ordinal[1]; 
    } else if (n % 10 === 2 && n % 100 !== 12) {
        suffix = ordinal[2]; 
    } else if (n % 10 === 3 && n % 100 !== 13) {
        suffix = ordinal[3]; 
    } else {
        suffix = ordinal[0];
    }

    console.log(`${n}${suffix} choice is ${color}`);
});


/*Exercise 3 : Analyzing
Instructions
Analyze these pieces of code before executing them. What will be the outputs ?*/
//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// i think the result willl be: bread carrot potato chicken apple orange

//------2------
const country = "USA";
console.log([...country]);
// i think it will be: U, S, A. this because it consider the variable country like an array of strings
//------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// i think it will either throw an error or it will console log twice blank spaces


/*🌟 Exercise 4 : Employees
Instructions
Using this array:*/

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


//Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
let greetingUsers = users.map((user)=>{
    return  ("Hello " + user.firstName)
})

//2. Using the filter() method, create a new array, containing only the Full Stack Residents.

let fullStackResident = users.filter((user)=>{
   return user.role === "Full Stack Resident" 

})

//3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

let lNames = users.filter((user)=>{return user.role === "Full Stack Resident"}).map((user)=>{return user.lastName})
console.log(lNames)


/*🌟 Exercise 5 : Star Wars
Instructions
Using this array */
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

//Use the reduce() method to combine all of these into a single string.

let newString = epic.reduce((acc, word) => {return acc + " " + word})



/*🌟 Exercise 6 : Employees #2
Instructions
Using this object:*/

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
/*Using the filter() method, create a new array, containing the students that passed the course.*/
let passedStudents = students.filter((student)=>{
    if (student.isPassed === true){return student}
})

//Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)/*
students.filter((student)=>{
    if (student.isPassed === true){return student}
}).forEach((student)=>{console.log(`Good job ${student.name}, you passed the course in ${student.course}`)})


