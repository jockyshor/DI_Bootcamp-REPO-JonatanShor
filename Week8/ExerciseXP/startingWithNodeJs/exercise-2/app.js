// Create another file named app.js.

// In app.js, import the array of person objects from the data.js module.

// Write a function that calculates and prints the average age of all the persons in the array.

// Use the imported array and the average age function in app.js.

// Run app.js and confirm that the average age is correctly calculated and displayed.

import {people} from './data.js';

function avrAge(arr){
    let ageSum = 0;
    for (let person of arr){
        ageSum += person.age
    }
    return ageSum / (arr.length);
}

const response = avrAge(people);

console.log(response);
