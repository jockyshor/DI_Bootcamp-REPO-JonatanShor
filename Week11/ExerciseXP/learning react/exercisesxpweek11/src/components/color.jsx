import React, { useState, useEffect } from "react";

const COLOR_NAMES = [
  "Crimson", "DeepPink", "Tomato", "Orange", "Gold", 
  "MediumOrchid", "RebeccaPurple", "SlateBlue", "LimeGreen", 
  "Teal", "Turquoise", "SteelBlue", "Salmon", "Sienna"
];

function Color(){
    const [favoriteColor, setColor]= useState("red");

    const randomColor = ()=>{
        const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * COLOR_NAMES.length);
        return COLOR_NAMES[randomIndex];
        };
        let givenColor = getRandomColor();

        setColor(givenColor)
    }

    useEffect(()=>{
        alert('useEffect reached'),[favoriteColor]
    })

    return (
        <>
        <header>
            My Favorite Color is {favoriteColor}
            <button onClick={randomColor}>ChangeFavColor</button>
        </header>   
        </>
    )
}

export default Color