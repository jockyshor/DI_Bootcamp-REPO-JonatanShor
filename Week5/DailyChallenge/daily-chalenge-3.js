

/*1st daily challenge
Create two functions. Each function should return a promise.
The first function called makeAllCaps(), takes an array of words as an argument
If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
else, reject the promise with a reason.
The second function called sortWords(), takes an array of words uppercased as an argument
If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
else, reject the promise with a reason.*/


function makeAllCaps(strArr){
    return new Promise((resolve, reject)=>{
        if (strArr.every(word=>typeof word === "string")){
            resolve (strArr.map(word => { return word.toUpperCase()}))}
        else{reject ("Error, all items in array are not STR")}
            })
}


function sortWords(uppCasedArr){
 return new Promise((resolve, reject)=>{
    if (uppCasedArr.length > 4)
        {resolve(uppCasedArr.sort())}
    else{reject("Error, the array is not longer than 4 items")}
 })
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))




//2nd daily challenge

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
} `

/*Create three functions. The two first functions should return a promise..

The first function is named toJs():
this function converts the morse json string provided above to a morse javascript object.
if the morse javascript object is empty, throw an error (use reject)
else return the morse javascript object (use resolve)*/

function toJs(json){
    let parsed = JSON.parse(json);
    return new Promise ((resolve, reject)=>{
        if (Object.keys(parsed).length === 0)
            {reject("Error, object is empty")}
        else{resolve(parsed)}
    })

}

//The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
//This function asks the user for a word or a sentence.
//if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
//else return an array with the morse translation of the user’s word

function translate(input, morseJs){
    let characters= input.split("");
    return characters.map(char=>morseJs[char])
}

function toMorse(morseJs){
let askUser = prompt("Type a word or a sentence, use `-` as space if needed").toLowerCase() || "";
return new Promise ((resolve, reject)=>{
if (typeof askUser !== "string" || (askUser.split("").every(key=>Object.hasOwn(morseJs, key)) === false)){
    reject ("Error, type valid input")}
else{resolve(translate(askUser, morseJs))}
})
}


//The third function called joinWords(morseTranslation), takes one argument: the morse translation array

//this function joins the morse translation by using line break and display it on the page (ie. On the DOM


function joinWords(morseTranslation){
    for (character of morseTranslation){
        console.log(character) /// here we would program the function to display the outcome of this in the DOM
    }
}
//Chain the three functions.

toJs(morse)
    .then(response1 =>toMorse(response1))
    .then(response2 => joinWords(response2))
    .catch(error => console.log(error));



    