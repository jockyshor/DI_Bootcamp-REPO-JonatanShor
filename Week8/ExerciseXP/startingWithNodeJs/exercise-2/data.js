
// 🌟 Exercise 2: Advanced Module Usage using ES6 module syntax
// Instructions
// Create a file named data.js.

// Inside data.js, define an array of objects, each representing a person with properties like name, age, and location.

// Export the array using the ES6 module syntax.

// Create another file named app.js.

// In app.js, import the array of person objects from the data.js module.

// Write a function that calculates and prints the average age of all the persons in the array.

// Use the imported array and the average age function in app.js.

// Run app.js and confirm that the average age is correctly calculated and displayed.

export const people = [
  {
    id: 1,
    name: "Sarah Jenkins",
    age: 28,
    location: "New York"
  },
  {
    id: 2,
    name: "Michael Chen",
    age: 34,
    location: "San Francisco"
  },
  {
    id: 3,
    name: "Elena Rostova",
    age: 22,
    location: "London"
  },
  {
    id: 4,
    name: "Marcus Souza",
    age: 41,
    location: "São Paulo"
  },
  {
    id: 5,
    name: "Amina Diop",
    age: 29,
    location: "Dakar"
  }
];

