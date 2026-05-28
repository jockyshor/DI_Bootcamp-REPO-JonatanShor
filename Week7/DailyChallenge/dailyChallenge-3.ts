
// Description:
// Create a function handleData that processes an array of mixed types. The array can contain objects with different structures. Implement type guards to handle each type of object and perform specific operations based on their structure.

// Instructions:
// 1. Define the following types:

type User = {
 type: 'user';
 name: string;
 age: number;
};

type Product = {
 type: 'product';
 id: number;
 price: number;
};

type Order = {
 type: 'order';
 orderId: string;
 amount: number;
};

// 2. Create a function handleData that accepts an array of User | Product | Order. Implement type guards to:

// For User objects, return a greeting message with the user’s name and age.
// For Product objects, return a message with the product ID and its price.
// For Order objects, return a summary of the order with its ID and amount.


// 3. Ensure your function handles unexpected cases gracefully.


type Everything = User | Product | Order

function handleData(arr: Everything[]){
let finalMessage: string[] = [];
for ( let a of arr){
    const index: number = arr.indexOf(a);
    try{
        switch (a.type){
            case "user":
                finalMessage.push( `Hello ${a.name}, you are ${a.age}`);
                break
            case "product":
                finalMessage.push(`The product ID is ${a.id}, and it costs $${a.price}`)
                break;
            case "order":
                finalMessage.push( `Your order ID is ${a.orderId}, for a total amount of $${a.amount}`)
                break  
            default:
                 throw new Error ("Something wrong happened...") // we will never get to this point as we will have a compilation error, but we can use this defualt for a exhaustiveness checking
        }
    }
    catch (error){
         finalMessage.push(`There has been an error in object ${index}`)
    }
}
 return finalMessage

}

