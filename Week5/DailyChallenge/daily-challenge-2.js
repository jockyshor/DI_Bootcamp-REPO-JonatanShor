/*Instructions
Create a function that:

takes in two strings as two parameters
and returns a boolean that indicates whether or not the first string is an anagram of the second string.*/


function isAnagram(firstStr, secondStr){
    let firstorder = firstStr.toLowerCase().split("").filter(letter => letter !== " ").sort().join("")
    let secondOrder = secondStr.toLowerCase().split("").filter(letter => letter !== " ").sort().join("");
    
    return firstorder === secondOrder
 
}



isAnagram("Astronomer","Moon starer")
