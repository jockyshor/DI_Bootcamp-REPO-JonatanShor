

// Create a file named products.js.

// Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.

// Export this array using the Common JS syntax.

// Create another file named shop.js.

// In shop.js, require the product objects from the products.js module.

// Create a function that takes a product name as a parameter and searches for the corresponding product object.

// Call this function with different product names and print the details of the products.

// Run shop.js and verify that the correct product details are displayed.


const products = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    price: 249.99,
    category: "Electronics",
    inStock: true
  },
  {
    id: 2,
    name: "Ergonomic Mesh Office Chair",
    price: 189.50,
    category: "Furniture",
    inStock: true
  },
  {
    id: 3,
    name: "Stainless Steel Water Bottle (32oz)",
    price: 34.99,
    category: "Fitness & Outdoors",
    inStock: false
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    price: 129.99,
    category: "Electronics",
    inStock: true
  },
  {
    id: 5,
    name: "Organic Matcha Green Tea Powder",
    price: 19.95,
    category: "Grocery",
    inStock: true
  }
];

module.exports = products;

