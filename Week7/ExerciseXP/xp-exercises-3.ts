

// 🌟 Exercise 1: Intersection Types
// What You Will Learn:
// Combine multiple types into one.

// Create a type that includes all properties from several types.
// Task
// Define an intersection type PersonWithAddress that combines Person and Address types. Create a variable of this type with properties from both types.
// The Person type should contain name and age, the Address type should contain street and city,


type Person = {
    name: string,
    age: number
}

type Address ={
    street: string,
    city: string
}

type PersonWithAddress = Person & Address;

const personAddress: PersonWithAddress = { name: 'John Doe', age: 30, street: '123 Main St', city: 'Anytown' };


// 🌟 Exercise 2: Type Guards with Union Types
// What You Will Learn
// Use type guards to handle different types.
// Perform actions based on the input type.
// Task
// Create a function describeValue that accepts number | string. Use type guards to return a description based on the input type:

// "This is a number" for numbers.
// "This is a string" for strings.


function describeValue(param: number | string ):string{
    if (typeof param === "number"){
        return "This is a number"
    }
    else{return "This is a string"}
}



// 🌟 Exercise 3: Type Casting
// What You Will Learn
// Convert a variable from one type to another using type casting.
// Understand the difference between type casting and type assertions.
// Task

// Create a variable someValue of type any and cast it to a string. Then, use it as a string.

let someValue: any = 234;

let castedValue: string = someValue as string

console.log(castedValue);

// 🌟 Exercise 4: Type Assertions with Union Types
// What You Will Learn
// Use type assertions to specify a type.
// Handle variables with union types.
// Task

// Create a function getFirstElement that takes an array of number | string and uses type assertions to return the first element as a string. Test with arrays of mixed types.

function getFirstElement(arr: (number | string)[]):string{
    let response: string = arr[0] as string
    return response;
}

const prueba1 = getFirstElement(["hola", 2, 3]);  

const prueba2 = getFirstElement([42, "mundo", 10]);

console.log(prueba1); 
console.log(prueba2);

// 🌟 Exercise 5: Generic Constraints
// What You Will Learn
// Use generic constraints to limit type usage.
// Create a generic function that works with constrained types.
// Task

// Create a generic function logLength that takes a parameter of type T constrained to types with a length property (like string or Array).
//  The function should log the length.

interface HasLength{
lenght: number;
}

function logLength<T extends HasLength>(parameter: T): void{
    console.log(parameter.lenght)
}

// 🌟 Exercise 6: Intersection Types and Type Guards
// What You Will Learn
// Combine types using intersection types.
// Use type guards to handle complex types safely.
// Task

// Define a type Employee that combines Person and Job using intersection types. Create a function describeEmployee that takes an Employee object and uses type guards to return a description based on whether the Job is a Manager or a Developer.

// Person type: name: string; age: number;
// Job type: position: string; department: string;
// Employee type should combine these.
// describeEmployee should return a specific message for each type of job.

type Person = {
    name: string;
    age: number;
}

type Job = {
    position: "Manager" | "Developer"; 
    department: string;
}

type Employee = Person & Job


function describeEmployee(obj: Employee):string{
    return `${obj.name}, aged ${obj.age}, works in the ${obj.department} department as a ${obj.position}`
}



// 🌟 Exercise 7: Type Assertions and Generic Constraints
// What You Will Learn
// Use type assertions to refine types in complex scenarios.
// Apply generic constraints to ensure type safety.
// Task

// Create a generic function formatInput that takes a parameter of type T constrained to have a toString() method. Use type assertions to ensure the parameter is treated as a string for formatting. The function should format the input as a string.

type Stringable = {
    toString(): string
}

function formatInput<T extends Stringable>(prmt: T){
    return prmt.toString() as string
}



