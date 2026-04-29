let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

/* Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

Create another arrow function named cloneGroceries.
In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
In the function, create a variable named shopping that is equal to the groceries variable.
Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

Invoke the cloneGroceries function.*/

let displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit)
    });
}

let cloneGroceries = () => {
    let shopping = groceries;
    let user = client;
    
}

client = "Betty"
groceries.totalPrice = "35$"

// when we call the function we will not see a modification as well in the user variable, because its a primitive value, and its a copy

// when we call the function we will see the modification for the total price, because it is  a pointer to a location, and if we change the  value in that specific location, we will se the new value

groceries.other.paid = false

// when we call the function, we will see the change, because the definition of the variable "shopping", happends only when we call the function, and if we change the value of the variable it is based on, then the copy will be changed

cloneGroceries()


