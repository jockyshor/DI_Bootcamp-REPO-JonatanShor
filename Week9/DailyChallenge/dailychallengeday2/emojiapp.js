import emojisDataBase from "./emojiData.js";


function getRandomNumber(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomEmoji(){

    let correctIndex = null;
    let incorrectIndex1= null;
    let incorrectIndex2 = null;

    do {
        correctIndex = getRandomNumber(emojisDataBase.length - 1);
        incorrectIndex1 = getRandomNumber(emojisDataBase.length - 1);
        incorrectIndex2 = getRandomNumber(emojisDataBase.length - 1)
    }   
    while (correctIndex === incorrectIndex1 || correctIndex === incorrectIndex2 || incorrectIndex1 === incorrectIndex2);
    
    return {
       correct: emojisDataBase[correctIndex],
       incorrect1: emojisDataBase[incorrectIndex1],
       incorrect2: emojisDataBase[incorrectIndex2]
    }
}
    
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const score = document.getElementById("score")
let currentScore = 0
score.textContent = currentScore;

const generateBtn = document.getElementById("generateEmoji");
const div = document.getElementById("showEmojiDiv");
const h1 = document.getElementById("showEmoji");
const guessInput = document.getElementById("guess");
const form = document.getElementById("Userguess");


let correctEmoji = null;
let incorrectEmoji1 = null;
let incorrectEmoji2 = null;


generateBtn.addEventListener("click", ()=>{
    div.innerHTML = ""
    const randomEmojisResponse = randomEmoji();
    const keys = Object.keys(randomEmojisResponse);
    const shuffledKeys = shuffleArray(keys);
    shuffledKeys.forEach(key => {
        const item = randomEmojisResponse[key]
        const option = document.createElement("h3");
        option.textContent = item.name;
        div.appendChild(option)
    });


    h1.textContent = randomEmojisResponse.correct.emoji;



    correctEmoji = randomEmojisResponse.correct
    
    

})

form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    

    if (!correctEmoji) {
        alert("You need to Generate a Emoji");
        return;}


    const data = {
        guess: guessInput.value,
        correctGuess: correctEmoji.name
    }

    const url = e.target.action;

    try{
        let f =  await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        let r = await f.json();

        let result = r;

        if (result.isCorrect) {
                currentScore += 10;
                score.textContent = currentScore
                alert("Correct! 🎉");
                generateBtn.click(); 
            } else {
                alert("Incorrect 😢");
            }
        }
    catch(error){
        console.error("Fetch error:", error);

}


})

