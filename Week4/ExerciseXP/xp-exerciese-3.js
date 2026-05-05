

/*🌟 Exercise 1 : Location
Instructions
Analyze the code below. What will be the output?*/
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// my guess will be:  I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)





//🌟 Exercise 2: Display Student Info
//Instructions
function displayStudentInfo(objUser ){
    //destructuring
    console.log("Your full name is " + first + last)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

// the instructions are not clear at all...
//Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'



/*🌟 Exercise 3: User & id
Instructions*/
//Using this object 
const users = { user1: 18273, user2: 92833, user3: 90315 }

//Using methods taught in class, turn the users object into an array:
Object.entries(users)
//Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
//FYI : The number is their ID number.
const doubleId = Object.entries(users).map((u)=>{return [u[0], u[1]*2]});
//Modify the outcome of part 1, by multipling the user’s ID by 2.
//Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]



/*Exercise 4 : Person class
Instructions
Analyze the code below. What will be the output?*/&
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
// the console will log that the type of person is "Object", because arrays, class instances and of course objects, will throw after typeof = Object






/*🌟 Exercise 5 : Dog class
Instructions
Using the Dog class below:*/

class Dog {
  constructor(name) {
    this.name = name;
  }
};
//Analyze the options below. Which constructor will successfully extend the Dog class?
  // 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};


  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};


  // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};


  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};

//The 2nd code, will succesfully extend the Dog class, because its using the proper syntax




/*🌟 Exercise 6 : Challenges
Evaluate these (ie True or False)*/

[2] === [2] 
{} === {}
//Their are both going to be false, because their are passing by reference

//What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; // 5
const object2 = object1; //5 
const object3 = object2; // also 5
const object4 = { number: 5}; // also 5

object1.number = 4;
console.log(object2.number) // output will be: 4
console.log(object3.number)// output will be: 4
console.log(object4.number) // output will be: 5


//Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …
class Animal{
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color
    }

}
//Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.
class Mammal extends Animal{
    constructor(name, type, color){
        super(name, type, color);
        
    };

    sound(sAM){
        return(sAM + " Im a " + this.type + " named " + this.name + " and im " + this.color)
    }
}
//Create a farmerCow object that is an instance of the class Mammal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
farmerCow = new Mammal("Lily", "cow", "brown and white");

console.log(farmerCow.sound("Mooooo"));
//For example: Moooo I'm a cow, named Lily and I'm brown and white

