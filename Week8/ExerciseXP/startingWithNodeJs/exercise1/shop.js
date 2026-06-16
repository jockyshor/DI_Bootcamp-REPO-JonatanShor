

// Create another file named shop.js.

// In shop.js, require the product objects from the products.js module.

// Create a function that takes a product name as a parameter and searches for the corresponding product object.

// Call this function with different product names and print the details of the products.

// Run shop.js and verify that the correct product details are displayed.

const products = require(`./product.js`);

function searchProduct(prodName){
   let response = products.find((prod)=>prod.name === prodName);
   if(response){
      return response;
   }
   else{
      return "Product not found"
   }
}

console.log(searchProduct("Wireless Noise-Canceling Headphones"));

console.log(searchProduct("Stainless Steel Water Bottle (32oz)"));

